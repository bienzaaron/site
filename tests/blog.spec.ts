import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/blog");
});

test("blog post list renders", async ({ page }) => {
  await expect(page.getByRole("link", { name: "Building This Site" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Just Messin' Around" })).toBeVisible();
  await expect(page.getByText("A peek into the technologies which power this site")).toBeVisible();
});

test("blog navigation works", async ({ page, baseURL }) => {
  await page.getByRole("link", { name: "Just Messin' Around" }).click();

  await expect(page).toHaveURL(new RegExp(`^${baseURL}/blog/2-another-post/?$`));
  await expect(page.getByRole("heading", { name: "Just Messin' Around" })).toBeVisible();
});
