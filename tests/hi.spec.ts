import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("first paragraph shows up", async ({ page }) => {
  const target = page
    .getByRole("paragraph")
    .filter({ hasText: "Hey!" })
    .first();
  await expect(target).toBeVisible();
});

test("second paragraph shows up", async ({ page }) => {
  const target = page
    .getByRole("paragraph")
    .filter({ hasText: "This is my little corner of the internet" })
    .first();
  await expect(target).toBeVisible();
});

test("photo shows up", async ({ page }) => {
  await page.waitForTimeout(3000);
  const text = page
    .getByRole("paragraph")
    .filter({ hasText: "picture of me, my wife, and all my pets" })
    .first();
  const image = page.getByAltText("me, my wife, dog, and two cats").first();

  await expect(text).toBeVisible();
  await expect(image).toBeVisible();
});
