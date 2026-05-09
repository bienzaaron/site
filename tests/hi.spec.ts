import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("first paragraph shows up", async ({ page }) => {
  const target = page.locator("p:visible", { hasText: "Hey!" }).first();
  await expect(target).toBeVisible();
});

test("second paragraph shows up", async ({ page }) => {
  const target = page
    .locator("p:visible", {
      hasText: "This is my little corner of the internet",
    })
    .first();
  await expect(target).toBeVisible();
});

test("photo shows up", async ({ page }) => {
  const text = page
    .locator("p:visible", {
      hasText: "picture of me, my wife, and all my pets",
    })
    .first();
  const image = page
    .locator('img[alt="me, my wife, dog, and two cats"]:visible')
    .first();

  await expect(text).toBeVisible({ timeout: 10000 });
  await expect(image).toBeVisible();
});

test.describe("without JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  test("home content is visible", async ({ page }) => {
    await expect(page.getByTestId("home-content")).toBeVisible();
    await expect(page.getByText("Hey!").first()).toBeVisible();
    await expect(
      page.getByText("This is my little corner of the internet").first(),
    ).toBeVisible();
    await expect(
      page.getByAltText("me, my wife, dog, and two cats"),
    ).toBeVisible();
  });
});
