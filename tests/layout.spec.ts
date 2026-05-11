import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("header links render", async ({ page }) => {
  await expect(page.getByRole("link", { name: "AJ Bienz" })).toBeVisible();
  await expect(page.getByRole("link", { name: "about" })).toBeVisible();
  await expect(page.getByRole("link", { name: "notes" })).toBeVisible();
  await expect(page.getByRole("link", { name: "rss" })).toBeVisible();
});

test("header navigation works", async ({ page, baseURL }) => {
  await page.getByRole("link", { name: "about" }).click();
  await expect(page).toHaveURL(new RegExp(`^${baseURL}/about/?$`));

  await page.getByRole("link", { name: "notes" }).click();
  await expect(page).toHaveURL(new RegExp(`^${baseURL}/blog/?$`));

  await page.getByRole("link", { name: "AJ Bienz" }).click();
  await expect(page).toHaveURL(new RegExp(`^${baseURL}/?$`));
});

test("external social links point to the right destinations", async ({ page }) => {
  await expect(page.getByRole("link", { name: "GitHub" })).toHaveAttribute(
    "href",
    "https://github.com/bienzaaron",
  );
  await expect(page.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/abienz",
  );
  await expect(page.getByRole("link", { name: "npm" })).toHaveAttribute(
    "href",
    "https://www.npmjs.com/~ajbienz",
  );
});
