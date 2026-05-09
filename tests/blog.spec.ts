import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/blog");
});

test("the Posts heading exists and has the appropriate aria role and level", async ({
  page,
}) => {
  // @ts-expect-error not great types here
  const heading = page.getByRole("heading[level=1]");
  expect(heading).toBeVisible();
  expect(await heading.textContent()).toEqual("Posts");
});

test("the post titles and previews render correctly and have appropriate aria roles and levels", async ({
  page,
}) => {
  const heading = page.getByTestId("post-title").first();
  expect(heading).toBeVisible();
  expect(
    await (await heading.elementHandle())?.evaluate((e) => e.tagName),
  ).toEqual("H2");

  const preview = page.getByTestId("post-description").first();
  expect(preview).toBeVisible();
  expect(
    await (await preview.elementHandle())?.evaluate((e) => e.tagName),
  ).toEqual("P");
});

test("the tags column renders correctly", async ({ page }) => {
  const tags = page.getByRole("button");
  const tagStrings = await tags.allTextContents();
  tagStrings
    .filter((tag) => tag)
    .forEach((tagString) => {
      expect(tagString).toMatch(/.+ \(\d+\)/);
    });
});

test("filtering by tags works", async ({ page }) => {
  const tag = page.getByRole("button").filter({ hasText: "something else" });
  const before = await page.getByRole("heading").count();

  await tag.click();

  const after = await page.getByRole("heading").count();
  expect(after).toBeLessThan(before);
});
