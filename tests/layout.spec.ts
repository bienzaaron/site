import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("header links show up", async ({ page, isMobile }) => {
  if (isMobile) {
    await page.getByTestId("menu-button").click();
  }
  await expect(
    page.getByRole("link").filter({ hasText: "Hi 👋" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link").filter({ hasText: "About 📕" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link").filter({ hasText: "Blog ✍️" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link").filter({ hasText: "Hire Me 💲" }),
  ).toBeVisible();
});

test("footer links show up", async ({ page }) => {
  await expect(
    page.getByRole("paragraph").filter({ hasText: "AJ Bienz" }),
  ).toBeVisible();
  await expect(page.getByTestId("gh-link")).toBeVisible();
  await expect(page.getByTestId("npm-link")).toBeVisible();
  await expect(page.getByTestId("linkedin-link")).toBeVisible();
});

test.describe("header navigation", () => {
  test.beforeEach(async ({ page, isMobile }) => {
    if (isMobile) {
      await page.getByTestId("menu-button").click();
    }
  });

  test("about link", async ({ page, baseURL }) => {
    await Promise.all([
      page.getByRole("link").filter({ hasText: "About 📕" }).click(),
    ]);
    await expect(page).toHaveURL(new RegExp(`^${baseURL}/about$`));
  });

  test("blog link", async ({ page, baseURL }) => {
    await Promise.all([
      page.getByRole("link").filter({ hasText: "Blog ✍️" }).click(),
      page.waitForURL(`${baseURL}/blog`),
    ]);
    await expect(page).toHaveURL(new RegExp(`^${baseURL}/blog$`));
  });

  test("home link", async ({ page, baseURL }) => {
    await Promise.all([
      page.getByRole("link").filter({ hasText: "Hi 👋" }).click(),
    ]);
    await expect(page).toHaveURL(new RegExp(`^${baseURL}/?$`));
  });

  test("resume link", async ({ page }) => {
    const resumeLink = page.getByRole("link").filter({ hasText: "Hire Me 💲" });

    await expect(resumeLink).toHaveAttribute(
      "href",
      "https://youtu.be/dQw4w9WgXcQ",
    );

    await resumeLink.click();
    await expect(page).toHaveURL(
      /^https:\/\/([^/]+\.)?(youtube\.com|youtu\.be)\//,
    );
  });
});

test("blog navigation works", async ({ page, baseURL }) => {
  await page.goto("/blog");
  await Promise.all([page.getByRole("heading", { level: 2 }).first().click()]);
  await expect(page).toHaveURL(new RegExp(`^${baseURL}/blog/.+$`));
});

test("github navigation works", async ({ page }) => {
  await Promise.all([page.getByTestId("gh-link").click()]);
  await expect(page).toHaveURL("https://github.com/bienzaaron");
});

test("npm navigation works", async ({ page }) => {
  await Promise.all([page.getByTestId("npm-link").click()]);
  await expect(page).toHaveURL("https://www.npmjs.com/~ajbienz");
});

test("linkedin navigation works", async ({ page }) => {
  const navigationPromise = page.waitForURL(/linkedin\.com/);
  await page.getByTestId("linkedin-link").click();
  await navigationPromise;
  expect(page.url()).toEqual("https://www.linkedin.com/in/abienz");
});
