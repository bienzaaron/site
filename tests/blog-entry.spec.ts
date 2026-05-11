import { expect, test } from "@playwright/test";

test("blog entries render markdown content", async ({ page }) => {
  await page.goto("/blog/2-another-post");

  await expect(page.getByRole("heading", { name: "Just Messin' Around" })).toBeVisible();
  await expect(page.getByText("This is really just here for testing purposes")).toBeVisible();
});

test("code blocks are syntax highlighted", async ({ page }) => {
  await page.goto("/blog/1-building-this-site");

  await expect(page.locator("pre code .token.function").first()).toBeVisible();
});
