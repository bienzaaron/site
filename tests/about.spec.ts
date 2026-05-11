import { expect, test } from "@playwright/test";

test("about page renders markdown content", async ({ page }) => {
  await page.goto("/about");

  await expect(page.getByRole("heading", { name: "About Me" })).toBeVisible();
  await expect(
    page.getByText("Hey, there! Thanks for checking out my site.").first(),
  ).toBeVisible();
});
