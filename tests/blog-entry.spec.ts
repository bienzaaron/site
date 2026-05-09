import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/blog/2-another-post/");
});

test("blog entries render correctly", async ({ page }) => {
  await expect(
    page.getByRole("heading", { name: "Just Messin' Around" }),
  ).toBeVisible();
  await expect(
    page.getByText("This is really just here for testing purposes"),
  ).toBeVisible();
});
