import { expect, test, type Page } from "@playwright/test";

type Viewport = {
  name: string;
  width: number;
  height: number;
};

const VIEWPORTS = [
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 818, height: 1180 },
  { name: "desktop", width: 1440, height: 1024 },
] as const satisfies readonly Viewport[];

test.describe.configure({ mode: "parallel" });

async function visit(page: Page, viewport: Viewport, path: string) {
  await page.setViewportSize({
    width: viewport.width,
    height: viewport.height,
  });
  const response = await page.goto(path, { waitUntil: "networkidle" });
  expect(response?.status(), `${path} should load`).toBe(200);
}

async function assertNoOverflow(page: Page, viewport: Viewport) {
  const metrics = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));

  expect(
    metrics.scrollWidth,
    `${viewport.name} horizontal overflow`,
  ).toBeLessThanOrEqual(viewport.width + 1);
  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);
}

async function assertImagesLoaded(page: Page, selector: string) {
  const images = page.locator(selector).filter({ visible: true });
  const count = await images.count();

  for (let index = 0; index < count; index += 1) {
    const image = images.nth(index);
    await image.scrollIntoViewIfNeeded();

    const loaded = await image.evaluate((element) => {
      const img = element as HTMLImageElement;
      return img.complete && img.naturalWidth > 0;
    });

    expect(loaded, `${selector} image ${index + 1} should load`).toBe(true);
  }
}

for (const viewport of VIEWPORTS) {
  test.describe(`${viewport.name} viewport`, () => {
    test(`home keeps the training hero and compact Workspace SVG`, async ({ page }) => {
      await visit(page, viewport, "/");

      await expect(
        page.locator('[data-scene="training-overview"]'),
      ).toHaveCount(1);
      await expect(
        page.locator('img[src*="training-network.webp"]'),
      ).toHaveCount(1);
      await expect(
        page.locator('img[src*="craftly-workspace-dashboard"]'),
      ).toHaveCount(1);
      const preview = page.locator('.product-showcase').first();
      await expect(preview.locator('.product-visual')).toHaveCount(0);
      const visual = preview.locator('.product-showcase__visual');
      const box = await visual.boundingBox();
      expect(box).not.toBeNull();
      expect(box!.height).toBeLessThanOrEqual(box!.width + 1);
      await assertImagesLoaded(page, '.product-showcase .video-showcase__image');
      await expect(
        page.locator(".pv-sidebar a, .pv-sidebar button"),
      ).toHaveCount(0);
      await assertImagesLoaded(page, ".product-visual--overview img");
      await assertNoOverflow(page, viewport);
    });

    test(`workspace renders one overview and eleven feature visuals`, async ({
      page,
    }) => {
      await visit(page, viewport, "/products/workspace");

      await expect(
        page.locator('[data-scene="training-overview"]'),
      ).toHaveCount(1);
      await expect(page.locator(".product-visual--feature")).toHaveCount(11);
      await expect(
        page.locator('img[src*="craftly-workspace-dashboard"]'),
      ).toHaveCount(0);
      await expect(
        page.locator('img[src*="/assets/Craftly_Robot/"]'),
      ).toHaveCount(0);
      await assertImagesLoaded(page, ".product-visual img");
      await assertNoOverflow(page, viewport);
    });

    test(`robot renders sixteen scene visuals with sanitized marketing copy`, async ({
      page,
    }) => {
      await visit(page, viewport, "/products/robot");

      await expect(page.locator(".product-visual--feature")).toHaveCount(16);
      await expect(
        page.locator('img[src*="/assets/Craftly_Robot/"]'),
      ).toHaveCount(0);
      await expect(
        page.locator('img[src*="craftly-workspace-dashboard"]'),
      ).toHaveCount(0);
      await expect(
        page.locator('img[src*="/assets/Craftly_Workspace/"]'),
      ).toHaveCount(0);

      const robotVisualText = (
        await page.locator(".product-visual").allTextContents()
      ).join(" ");
      expect(robotVisualText).not.toMatch(/%|\blogs?\b/i);

      await assertImagesLoaded(page, ".product-visual img");
      await assertNoOverflow(page, viewport);
    });

    test(`documentation training page renders cleanly`, async ({ page }) => {
      await visit(
        page,
        viewport,
        "/resources/documentation/workspace/resources/training",
      );

      await expect(
        page.getByRole("heading", { level: 1 }).first(),
      ).toBeVisible();
      await expect(
        page.locator('img[src*="training_participation/1.webp"]'),
      ).toHaveCount(1);
      await assertImagesLoaded(page, "main img");
      await assertNoOverflow(page, viewport);
    });
  });
}

test("training CTA points to the training documentation page", async ({
  page,
}) => {
  await visit(page, VIEWPORTS[2], "/");

  const trainingCta = page
    .getByRole("link", { name: "Explore training" })
    .first();
  await expect(trainingCta).toHaveAttribute(
    "href",
    "/resources/documentation/workspace/resources/training",
  );

  await trainingCta.click();
  await expect(page).toHaveURL(
    "/resources/documentation/workspace/resources/training",
  );
  await expect(page.getByRole("heading", { level: 1 }).first()).toBeVisible();
});

test("training overview enters once and stays entered after leaving and re-entering", async ({
  page,
}) => {
  await visit(page, VIEWPORTS[2], "/");

  const overview = page.locator('[data-scene="training-overview"]').first();

  await overview.scrollIntoViewIfNeeded();
  await expect(overview).toHaveAttribute("data-entered", "true");

  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  await expect(overview).toHaveAttribute("data-entered", "true");

  await overview.scrollIntoViewIfNeeded();
  await expect(overview).toHaveAttribute("data-entered", "true");
});

test("reduced motion disables the product visual animations", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await visit(page, VIEWPORTS[2], "/");

  await expect(
    page.locator(".product-visual[data-reduced-motion='true']"),
  ).toHaveCount(1);
  const computeAnimations = await page
    .locator(".product-visual--overview .pv-compute")
    .evaluateAll((elements) =>
      elements.map((element) => getComputedStyle(element).animationName),
    );
  expect(computeAnimations.every((name) => name === "none")).toBe(true);

  const progressAnimations = await page
    .locator(".product-visual--overview .pv-progress__track > span")
    .evaluateAll((elements) =>
      elements.map((element) => getComputedStyle(element).animationName),
    );
  expect(progressAnimations.every((name) => name === "none")).toBe(true);

  const robotAnimations = await page
    .locator(".robot-demo")
    .evaluate((element) => element.getAnimations().length);
  expect(robotAnimations).toBe(0);
});
