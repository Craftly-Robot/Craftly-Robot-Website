import { test, expect } from "@playwright/test";

const ROUTES = [
  "/",
  "/download",
  "/products/workspace",
  "/products/robot",
  "/use-cases/operations",
  "/use-cases/ai",
  "/use-cases/agent-negotiation",
  "/resources/documentation",
  "/resources/documentation/faq",
  "/resources/documentation/plan",
  "/resources/blog",
];

test.describe.configure({ mode: "parallel" });

for (const route of ROUTES) {
  test(`smoke: ${route} renders without errors`, async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });
    page.on("pageerror", (err) => consoleErrors.push(err.message));

    const response = await page.goto(route, { waitUntil: "networkidle" });
    expect(response?.status()).toBe(200);

    await expect(page.locator("#root > *").first()).toBeVisible();

    // Ignore expected asset 404s (e.g. optional video sources)
    const realErrors = consoleErrors.filter(
      (text) => !/Failed to load resource/i.test(text),
    );
    expect(realErrors, `console errors on ${route}`).toEqual([]);
  });
}
