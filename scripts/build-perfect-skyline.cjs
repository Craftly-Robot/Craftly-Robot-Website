const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function generateSkylineSvg() {
  const strokeColor = '#6f7b75';
  const lightFill = '#ebf0eb';
  const wingFill1 = '#f7faf7';
  const wingFill2 = '#ffffff';
  const waterColor = '#8e9993';

  // Canvas: 2048 x 496 (exact 2x of 1024x248 source)
  // Baseline: Y = 386

  // 1. JATIYA SMRITI SOUDHO (National Martyrs' Memorial)
  // 7 pairs of authentic architectural curved wings with bottom flare
  const wings = [
    { lf: 184, rf: 624, f: wingFill1, cpFoot: 68, cpSpine: 24, cpTopY: 226 },
    { lf: 220, rf: 588, f: wingFill2, cpFoot: 60, cpSpine: 20, cpTopY: 226 },
    { lf: 256, rf: 552, f: wingFill1, cpFoot: 52, cpSpine: 16, cpTopY: 226 },
    { lf: 294, rf: 514, f: wingFill2, cpFoot: 44, cpSpine: 13, cpTopY: 226 },
    { lf: 330, rf: 478, f: wingFill1, cpFoot: 36, cpSpine: 10, cpTopY: 226 },
    { lf: 362, rf: 446, f: wingFill2, cpFoot: 28, cpSpine: 7, cpTopY: 226 },
    { lf: 384, rf: 424, f: wingFill1, cpFoot: 20, cpSpine: 4, cpTopY: 226 }
  ];

  let wingsSvg = '';
  wings.forEach(w => {
    wingsSvg += `    <path d="M ${w.lf} 376 C ${w.lf + w.cpFoot} 376, ${404 - w.cpSpine} ${w.cpTopY}, 404 72 C ${404 + w.cpSpine} ${w.cpTopY}, ${w.rf - w.cpFoot} 376, ${w.rf} 376 Z" fill="${w.f}" stroke="${strokeColor}" stroke-width="1.3" />\n`;
  });

  const monument = `
  <!-- Jatiya Smriti Soudho -->
  <g id="smriti-soudho" stroke="${strokeColor}" stroke-linejoin="round">
    <!-- Plinth Base -->
    <rect x="144" y="376" width="484" height="8" fill="${lightFill}" stroke-width="1.5" />
    <line x1="140" y1="380" x2="632" y2="380" stroke-width="0.9" />

    <!-- 7 Pairs of Symmetrical Curved Wings -->
${wingsSvg}
    <!-- Center A-Frame Opening -->
    <polygon points="385,376 401,126 407,126 423,376" fill="#ffffff" stroke-width="1.4" />
    <line x1="389" y1="376" x2="403" y2="132" stroke-width="1.0" />
    <line x1="419" y1="376" x2="405" y2="132" stroke-width="1.0" />

    <!-- A Horizontal Crossbar -->
    <rect x="391" y="235" width="26" height="4" fill="#ffffff" stroke-width="1.2" />

    <!-- Stepped base pedestal peak -->
    <polygon points="404,365 374,376 434,376" fill="${lightFill}" stroke-width="1.3" />
    <line x1="404" y1="365" x2="404" y2="376" stroke-width="1.1" />

    <!-- Needle Pinnacle at Apex -->
    <line x1="404" y1="40" x2="404" y2="72" stroke-width="1.6" />
  </g>
  `;

  // 2. LEFT TREES (left of monument: x=140..250)
  const leftTrees = `
  <!-- Left Trees -->
  <g stroke="${strokeColor}" fill="${lightFill}" stroke-linejoin="round">
    <!-- Bush 1 (x=156) -->
    <path d="M 126 386 C 126 364, 142 350, 160 350 C 168 350, 174 354, 178 360 C 186 352, 200 352, 208 362 C 214 370, 216 380, 216 386 Z" stroke-width="1.4" />
    <line x1="168" y1="352" x2="168" y2="386" stroke-width="1.2" />
    <line x1="168" y1="368" x2="154" y2="358" stroke-width="1.0" />
    <line x1="168" y1="364" x2="182" y2="356" stroke-width="1.0" />

    <!-- Bush 2 (x=216) -->
    <path d="M 198 386 C 198 366, 212 354, 228 354 C 236 354, 244 358, 248 366 C 254 360, 266 360, 272 368 C 276 374, 276 382, 276 386 Z" stroke-width="1.4" />
    <line x1="234" y1="356" x2="234" y2="386" stroke-width="1.2" />
    <line x1="234" y1="370" x2="222" y2="362" stroke-width="1.0" />
    <line x1="234" y1="366" x2="246" y2="360" stroke-width="1.0" />
  </g>
  `;

  // Helper for curved evergreen pine tree with authentic scalloped boughs
  function pineTree(cx, topY, botY, width) {
    const half = width / 2;
    const h = botY - topY;
    const t1 = topY + h * 0.32;
    const t2 = topY + h * 0.64;
    return `
    <!-- Pine at cx=${cx} -->
    <path d="M ${cx} ${topY}
      C ${cx + half * 0.25} ${topY + h * 0.12}, ${cx + half * 0.6} ${t1 - 10}, ${cx + half * 0.72} ${t1}
      C ${cx + half * 0.5} ${t1 + 2}, ${cx + half * 0.4} ${t1 + 6}, ${cx + half * 0.45} ${t1 + 10}
      C ${cx + half * 0.75} ${t2 - 10}, ${cx + half * 0.9} ${t2 - 4}, ${cx + half} ${t2}
      C ${cx + half * 0.75} ${t2 + 2}, ${cx + half * 0.65} ${t2 + 6}, ${cx + half * 0.7} ${t2 + 10}
      C ${cx + half * 0.95} ${botY - 10}, ${cx + half * 1.05} ${botY - 4}, ${cx + half * 1.05} ${botY}
      L ${cx - half * 1.05} ${botY}
      C ${cx - half * 1.05} ${botY - 4}, ${cx - half * 0.95} ${botY - 10}, ${cx - half * 0.7} ${t2 + 10}
      C ${cx - half * 0.65} ${t2 + 6}, ${cx - half * 0.75} ${t2 + 2}, ${cx - half} ${t2}
      C ${cx - half * 0.9} ${t2 - 4}, ${cx - half * 0.75} ${t2 - 10}, ${cx - half * 0.45} ${t1 + 10}
      C ${cx - half * 0.4} ${t1 + 6}, ${cx - half * 0.5} ${t1 + 2}, ${cx - half * 0.72} ${t1}
      C ${cx - half * 0.6} ${t1 - 10}, ${cx - half * 0.25} ${topY + h * 0.12}, ${cx} ${topY} Z"
      fill="${lightFill}" stroke="${strokeColor}" stroke-width="1.3" />
    <line x1="${cx}" y1="${topY}" x2="${cx}" y2="${botY}" stroke="${strokeColor}" stroke-width="1.2" />
    <line x1="${cx}" y1="${t1 - 6}" x2="${cx - half * 0.4}" y2="${t1 + 6}" stroke="${strokeColor}" stroke-width="1.0" />
    <line x1="${cx}" y1="${t1 - 6}" x2="${cx + half * 0.4}" y2="${t1 + 6}" stroke="${strokeColor}" stroke-width="1.0" />
    <line x1="${cx}" y1="${t2 - 6}" x2="${cx - half * 0.6}" y2="${t2 + 6}" stroke="${strokeColor}" stroke-width="1.0" />
    <line x1="${cx}" y1="${t2 - 6}" x2="${cx + half * 0.6}" y2="${t2 + 6}" stroke="${strokeColor}" stroke-width="1.0" />
    <line x1="${cx}" y1="${botY - 14}" x2="${cx - half * 0.75}" y2="${botY - 2}" stroke="${strokeColor}" stroke-width="1.0" />
    <line x1="${cx}" y1="${botY - 14}" x2="${cx + half * 0.75}" y2="${botY - 2}" stroke="${strokeColor}" stroke-width="1.0" />
    `;
  }

  // Multi-lobed cloud tree
  function cloudTree(cx, cy, rx, ry, botY = 386) {
    return `
    <!-- Cloud Tree at cx=${cx} -->
    <path d="M ${cx - rx} ${botY}
      C ${cx - rx} ${cy + ry * 0.5}, ${cx - rx * 0.9} ${cy}, ${cx - rx * 0.6} ${cy - ry * 0.5}
      C ${cx - rx * 0.4} ${cy - ry * 0.9}, ${cx - rx * 0.15} ${cy - ry}, ${cx} ${cy - ry}
      C ${cx + rx * 0.15} ${cy - ry}, ${cx + rx * 0.4} ${cy - ry * 0.9}, ${cx + rx * 0.6} ${cy - ry * 0.5}
      C ${cx + rx * 0.9} ${cy}, ${cx + rx} ${cy + ry * 0.5}, ${cx + rx} ${botY} Z"
      fill="${lightFill}" stroke="${strokeColor}" stroke-width="1.3" />
    <line x1="${cx}" y1="${cy - ry * 0.6}" x2="${cx}" y2="${botY}" stroke="${strokeColor}" stroke-width="1.2" />
    <line x1="${cx}" y1="${cy}" x2="${cx - rx * 0.5}" y2="${cy - ry * 0.35}" stroke="${strokeColor}" stroke-width="1.0" />
    <line x1="${cx}" y1="${cy + 6}" x2="${cx + rx * 0.5}" y2="${cy - ry * 0.25}" stroke="${strokeColor}" stroke-width="1.0" />
    `;
  }

  // 3. MIDDLE TREES
  const middleTrees = `
  <!-- Middle Rolling Hills and Trees -->
  <path d="M 580 386 C 630 380, 680 384, 730 386 C 780 382, 840 380, 900 386 C 940 382, 990 380, 1050 386" fill="none" stroke="${strokeColor}" stroke-width="1.1" />

  ${cloudTree(604, 350, 36, 30)}
  ${cloudTree(644, 356, 30, 26)}
  ${pineTree(676, 254, 386, 76)}
  ${cloudTree(746, 354, 38, 30)}
  ${pineTree(834, 296, 386, 56)}
  ${pineTree(896, 280, 386, 62)}
  ${cloudTree(956, 354, 36, 30)}
  ${cloudTree(1014, 358, 32, 26)}
  ${cloudTree(1068, 348, 42, 34)}
  ${cloudTree(1114, 360, 28, 24)}
  `;

  // 4. BRIDGE VIADUCT & MAIN SPAN
  function deckY(x) {
    if (x <= 1390) {
      return 370 - ((x - 1040) / (1390 - 1040)) * (370 - 352);
    } else if (x <= 1620) {
      return 352 - ((x - 1390) / (1620 - 1390)) * (352 - 340);
    } else {
      return 340 - ((x - 1620) / (1766 - 1620)) * (340 - 330);
    }
  }

  function flaredPier(cx, topW = 24, botW = 10, botY = 386) {
    const topY = deckY(cx) + 8;
    const h = botY - topY;
    const halfT = topW / 2;
    const halfB = botW / 2;
    return `
    <polygon points="${cx - halfT},${topY} ${cx + halfT},${topY} ${cx + halfB + 2},${topY + h * 0.35} ${cx + halfB},${botY} ${cx - halfB},${botY} ${cx - halfB - 2},${topY + h * 0.35}" fill="${lightFill}" stroke="${strokeColor}" stroke-width="1.3" />
    <line x1="${cx - halfT}" y1="${topY + 3}" x2="${cx + halfT}" y2="${topY + 3}" stroke="${strokeColor}" stroke-width="1.0" />
    `;
  }

  const piers = `
  <!-- Bridge Approach and Span Support Piers -->
  <g id="bridge-piers">
    <!-- Approach Pier 1 -->
    ${flaredPier(1076, 18, 8)}
    <!-- Approach Pier 2 -->
    ${flaredPier(1166, 20, 8)}
    <!-- Approach Pier 3 -->
    ${flaredPier(1256, 22, 9)}
    <!-- Approach Pier 4 -->
    ${flaredPier(1346, 24, 9)}
    <!-- Mid-Span Pier -->
    ${flaredPier(1506, 28, 10)}
    <!-- Right Span Pier -->
    ${flaredPier(1750, 26, 10)}
  </g>
  `;

  // Bridge Deck Slab (thickness: 8px)
  const bridgeDeck = `
  <!-- Bridge Deck Roadway Slab -->
  <polygon points="1040,370 1766,330 1766,338 1040,378" fill="${lightFill}" stroke="${strokeColor}" stroke-width="1.5" />
  <line x1="1040" y1="370" x2="1766" y2="330" stroke="${strokeColor}" stroke-width="1.5" />
  <line x1="1040" y1="378" x2="1766" y2="338" stroke="${strokeColor}" stroke-width="1.5" />
  `;

  // Towers
  const tower1 = `
  <!-- Tower 1 Twin Pylons -->
  <g id="tower-1" stroke="${strokeColor}" fill="${lightFill}">
    <rect x="1384" y="202" width="10" height="184" stroke-width="1.5" rx="1" />
    <rect x="1404" y="202" width="10" height="184" stroke-width="1.5" rx="1" />
    <polygon points="1394,214 1399,204 1404,214" stroke-width="1.2" />
  </g>
  `;

  const tower2 = `
  <!-- Tower 2 Twin Pylons (Taller) -->
  <g id="tower-2" stroke="${strokeColor}" fill="${lightFill}">
    <rect x="1618" y="146" width="10" height="240" stroke-width="1.5" rx="1" />
    <rect x="1638" y="146" width="10" height="240" stroke-width="1.5" rx="1" />
    <polygon points="1628,160 1633,148 1638,160" stroke-width="1.2" />
  </g>
  `;

  // Stay Cables
  let cables = '  <!-- Stay Cables -->\n  <g stroke="' + strokeColor + '" stroke-width="1.2">\n';

  // Tower 1 Left Stay Cables (7 cables)
  const t1LeftDeckX = [1222, 1248, 1276, 1302, 1328, 1354, 1378];
  t1LeftDeckX.forEach((x, i) => {
    const topY = 212 + i * 4.4;
    const botY = deckY(x);
    cables += `    <line x1="1389" y1="${topY.toFixed(1)}" x2="${x}" y2="${botY.toFixed(1)}" />\n`;
  });

  // Tower 1 Right Stay Cables (7 cables)
  const t1RightDeckX = [1420, 1444, 1470, 1496, 1522, 1548, 1572];
  t1RightDeckX.forEach((x, i) => {
    const topY = 212 + i * 4.4;
    const botY = deckY(x);
    cables += `    <line x1="1409" y1="${topY.toFixed(1)}" x2="${x}" y2="${botY.toFixed(1)}" />\n`;
  });

  // Tower 2 Left Stay Cables (8 cables crossing Tower 1's cables)
  const t2LeftDeckX = [1450, 1474, 1500, 1526, 1552, 1576, 1600, 1614];
  t2LeftDeckX.forEach((iX, i) => {
    const topY = 156 + i * 5.0;
    const botY = deckY(iX);
    cables += `    <line x1="1623" y1="${topY.toFixed(1)}" x2="${iX}" y2="${botY.toFixed(1)}" />\n`;
  });

  // Tower 2 Right Stay Cables (8 cables anchored to right span)
  const t2RightDeckX = [1644, 1660, 1678, 1698, 1716, 1734, 1750, 1762];
  t2RightDeckX.forEach((rX, i) => {
    const topY = 156 + i * 5.0;
    const botY = deckY(rX);
    cables += `    <line x1="1643" y1="${topY.toFixed(1)}" x2="${rX}" y2="${botY.toFixed(1)}" />\n`;
  });
  cables += '  </g>\n';

  // 5. RIGHT TREES (behind the bridge abutment: x=1760..1960)
  const rightTrees = `
  <!-- Far Right Trees Behind Bridge -->
  <g stroke="${strokeColor}" fill="${lightFill}" stroke-linejoin="round">
    <!-- Tree 1 -->
    <path d="M 1756 386 C 1756 362, 1774 344, 1800 344 C 1812 344, 1822 350, 1828 358 C 1838 348, 1856 348, 1866 358 C 1872 366, 1874 376, 1874 386 Z" stroke-width="1.3" />
    <line x1="1814" y1="346" x2="1814" y2="386" stroke-width="1.2" />
    <line x1="1814" y1="364" x2="1796" y2="354" stroke-width="1.0" />
    <line x1="1814" y1="360" x2="1832" y2="352" stroke-width="1.0" />

    <!-- Tree 2 (Large Right Tree) -->
    <path d="M 1836 386 C 1836 348, 1858 322, 1894 322 C 1908 308, 1932 302, 1956 306 C 1978 292, 2010 298, 2026 318 C 2046 316, 2066 332, 2070 356 C 2074 372, 2070 382, 2066 386 Z" stroke-width="1.4" />
    <line x1="1960" y1="306" x2="1960" y2="386" stroke-width="1.3" />
    <line x1="1960" y1="338" x2="1926" y2="318" stroke-width="1.0" />
    <line x1="1960" y1="348" x2="1998" y2="326" stroke-width="1.0" />
    <line x1="1960" y1="364" x2="1936" y2="350" stroke-width="1.0" />
    <line x1="1960" y1="368" x2="1988" y2="354" stroke-width="1.0" />
  </g>
  `;

  // 6. BASELINE AND WATER RIPPLE REFLECTIONS
  // Rows at y=394, 402, 410, 418, 426, 434, 442
  const groundAndWater = `
  <!-- Ground Baseline -->
  <line x1="60" y1="386" x2="2040" y2="386" stroke="${strokeColor}" stroke-width="1.8" stroke-linecap="round" />

  <!-- Calm Water Ripple Lines -->
  <g stroke="${waterColor}" stroke-width="1.2" stroke-linecap="round">
    <!-- Row 1: y=394 -->
    <line x1="160" y1="394" x2="400" y2="394" />
    <line x1="520" y1="394" x2="760" y2="394" />
    <line x1="880" y1="394" x2="1080" y2="394" />
    <line x1="1200" y1="394" x2="1480" y2="394" />
    <line x1="1580" y1="394" x2="1860" y2="394" />

    <!-- Row 2: y=402 -->
    <line x1="220" y1="402" x2="500" y2="402" />
    <line x1="620" y1="402" x2="860" y2="402" />
    <line x1="980" y1="402" x2="1240" y2="402" />
    <line x1="1340" y1="402" x2="1620" y2="402" />
    <line x1="1720" y1="402" x2="1920" y2="402" />

    <!-- Row 3: y=410 -->
    <line x1="280" y1="410" x2="580" y2="410" />
    <line x1="720" y1="410" x2="1000" y2="410" />
    <line x1="1120" y1="410" x2="1400" y2="410" />
    <line x1="1500" y1="410" x2="1760" y2="410" />

    <!-- Row 4: y=418 -->
    <line x1="360" y1="418" x2="660" y2="418" />
    <line x1="820" y1="418" x2="1120" y2="418" />
    <line x1="1240" y1="418" x2="1560" y2="418" />

    <!-- Row 5: y=426 -->
    <line x1="460" y1="426" x2="760" y2="426" />
    <line x1="940" y1="426" x2="1260" y2="426" />

    <!-- Row 6: y=434 -->
    <line x1="560" y1="434" x2="880" y2="434" />
    <line x1="1060" y1="434" x2="1380" y2="434" />

    <!-- Row 7: y=442 -->
    <line x1="680" y1="442" x2="1040" y2="442" />
  </g>
  `;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 496" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
${monument}
${leftTrees}
${middleTrees}
${piers}
${bridgeDeck}
${cables}
${tower1}
${tower2}
${rightTrees}
${groundAndWater}
</svg>
`;
}

async function run() {
  const svg = generateSkylineSvg();

  // Targets to write production assets to
  const targets = [
    {
      svg: 'public/assets/Craftly_Cloud/bangladesh-skyline.svg',
      png: 'public/assets/Craftly_Cloud/bangladesh-skyline.png'
    }
  ];

  // Render 4096 x 992 ultra-HD crisp PNG buffer (4x supersampled)
  const pngBuffer = await sharp(Buffer.from(svg))
    .resize(4096, 992)
    .png({ compressionLevel: 9 })
    .toBuffer();

  for (const t of targets) {
    fs.mkdirSync(path.dirname(t.svg), { recursive: true });
    fs.writeFileSync(t.svg, svg, 'utf8');
    fs.writeFileSync(t.png, pngBuffer);
    console.log(`Updated ${t.svg} (${svg.length} bytes) and ${t.png} (${pngBuffer.length} bytes)`);
  }
}

run().catch(console.error);
