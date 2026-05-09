import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/about");
});

test("the about page renders", async ({ page }) => {
  const target = page
    .getByText("Hey, there! Thanks for checking out my site.")
    .first();
  await expect(target).toBeVisible();
});
