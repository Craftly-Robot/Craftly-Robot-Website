#!/usr/bin/env bun
/**
 * Removes unused imports from TypeScript/React files.
 * Handles: import { named } from "...", import Default from "...", import Default, { named } from "..."
 */
import { execSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";

const files = execSync("find src -name '*.tsx' -o -name '*.ts'", {
  encoding: "utf-8",
})
  .trim()
  .split("\n")
  .filter(Boolean);

let totalRemoved = 0;
let totalFiles = 0;

for (const file of files) {
  const content = readFileSync(file, "utf-8");
  const lines = content.split("\n");

  const importLines: number[] = [];
  const nonImportContent: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].match(/^\s*import\s/)) {
      importLines.push(i);
    } else {
      nonImportContent.push(lines[i]);
    }
  }

  if (importLines.length === 0) continue;

  const body = nonImportContent.join("\n");
  let modified = false;
  const newLines = [...lines];

  for (const lineIdx of importLines) {
    const line = lines[lineIdx];

    // Pattern 1: import { a, b, type C } from "module"
    const namedMatch = line.match(
      /^(\s*)import\s+(type\s+)?{([^}]+)}\s+from\s+(['"])([^'"]+)\4\s*;?\s*$/,
    );
    if (namedMatch) {
      const [, indent, typePrefix, importsStr, quote, modulePath] = namedMatch;
      if (typePrefix) continue; // type-only imports - keep

      const imports = importsStr
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      const usedImports = imports.filter((imp) => {
        const name = imp
          .replace(/^type\s+/, "")
          .split(/\s+as\s+/)[0]
          .trim();
        const regex = new RegExp(`\\b${name}\\b`);
        return regex.test(body);
      });

      if (usedImports.length < imports.length) {
        modified = true;
        totalRemoved += imports.length - usedImports.length;
        if (usedImports.length === 0) {
          newLines[lineIdx] = null as any;
        } else {
          newLines[lineIdx] =
            `${indent}import { ${usedImports.join(", ")} } from ${quote}${modulePath}${quote};`;
        }
      }
      continue;
    }

    // Pattern 2: import Default from "module" or import type Default from "module"
    const defaultMatch = line.match(
      /^(\s*)import\s+(type\s+)?(\w+)\s+from\s+(['"])([^'"]+)\4\s*;?\s*$/,
    );
    if (defaultMatch) {
      const [, , typePrefix, name] = defaultMatch;
      if (typePrefix) continue;

      const regex = new RegExp(`\\b${name}\\b`);
      if (!regex.test(body)) {
        modified = true;
        totalRemoved++;
        newLines[lineIdx] = null as any;
      }
      continue;
    }

    // Pattern 3: import Default, { named } from "module"
    const mixedMatch = line.match(
      /^(\s*)import\s+(\w+)\s*,\s*{([^}]+)}\s+from\s+(['"])([^'"]+)\4\s*;?\s*$/,
    );
    if (mixedMatch) {
      const [, indent, defaultName, importsStr, quote, modulePath] = mixedMatch;
      const imports = importsStr
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      const defaultUsed = new RegExp(`\\b${defaultName}\\b`).test(body);
      const usedNamed = imports.filter((imp) => {
        const name = imp
          .replace(/^type\s+/, "")
          .split(/\s+as\s+/)[0]
          .trim();
        return new RegExp(`\\b${name}\\b`).test(body);
      });

      const parts: string[] = [];
      if (defaultUsed) parts.push(defaultName);
      if (usedNamed.length > 0) parts.push(`{ ${usedNamed.join(", ")} }`);

      const removedCount = (defaultUsed ? 0 : 1) + (imports.length - usedNamed.length);
      if (removedCount > 0) {
        modified = true;
        totalRemoved += removedCount;
        if (parts.length === 0) {
          newLines[lineIdx] = null as any;
        } else if (parts.length === 1 && !defaultUsed) {
          newLines[lineIdx] = `${indent}import ${parts[0]} from ${quote}${modulePath}${quote};`;
        } else {
          newLines[lineIdx] =
            `${indent}import ${parts.join(", ")} from ${quote}${modulePath}${quote};`;
        }
      }
    }
  }

  if (modified) {
    const result = newLines.filter((l) => l !== null).join("\n");
    const cleaned = result.replace(/\n{3,}/g, "\n\n");
    writeFileSync(file, cleaned);
    totalFiles++;
    console.log(`Fixed: ${file}`);
  }
}

console.log(`\nDone. Removed ${totalRemoved} unused imports from ${totalFiles} files.`);
