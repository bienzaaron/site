import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("home introduction renders", async ({ page }) => {
  await expect(page.getByText("Hey! I'm AJ").first()).toBeVisible();
  await expect(page.getByText("This is my little corner of the internet").first()).toBeVisible();
});

test("photo and social links render", async ({ page }) => {
  await expect(page.getByAltText("me, my wife, dog, and two cats")).toBeVisible();
  await expect(page.getByRole("link", { name: "GitHub" })).toBeVisible();
  await expect(page.getByRole("link", { name: "LinkedIn" })).toBeVisible();
  await expect(page.getByRole("link", { name: "npm" })).toBeVisible();
});
