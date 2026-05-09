import { test, expect } from "@playwright/test";

test("blog entries render correctly", async ({ page }) => {
  await page.goto("/blog/2-another-post/");

  await expect(
    page.getByRole("heading", { name: "Just Messin' Around" }),
  ).toBeVisible();
  await expect(
    page.getByText("This is really just here for testing purposes"),
  ).toBeVisible();
});

test("blog entries include prerendered content without JavaScript", async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();

  await page.goto(`${baseURL}/blog/2-another-post/`);
  await expect(
    page.getByRole("heading", { name: "Just Messin' Around" }),
  ).toBeVisible();
  await expect(
    page.getByText("This is really just here for testing purposes"),
  ).toBeVisible();

  await context.close();
});
