import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('header links show up', async ({ page, isMobile }) => {
  if (isMobile) {
    await page.getByTestId('menu-button').click();
  }
  await expect(page.getByRole('link').filter({ hasText: 'Hi 👋' })).toBeVisible();
  await expect(page.getByRole('link').filter({ hasText: 'About 📕' })).toBeVisible();
  await expect(page.getByRole('link').filter({ hasText: 'Blog ✍️' })).toBeVisible();
  await expect(page.getByRole('link').filter({ hasText: 'Hire Me 💲' })).toBeVisible();
});

test('footer links show up', async ({ page }) => {
  await expect(page.getByRole('paragraph').filter({ hasText: 'AJ Bienz' })).toBeVisible();
  await expect(page.getByTestId('gh-link')).toBeVisible();
  await expect(page.getByTestId('npm-link')).toBeVisible();
  await expect(page.getByTestId('linkedin-link')).toBeVisible();
});

test.describe('header navigation', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    if (isMobile) {
      await page.getByTestId('menu-button').click();
    }
  });

  test('about link', async ({ page, baseURL }) => {
    await Promise.all([
      page.waitForNavigation(),
      page.getByRole('link').filter({ hasText: 'About 📕' }).click(),
    ]);
    expect(page.url()).toEqual(`${baseURL}/about`);
  });

  test('blog link', async ({ page, baseURL }) => {
    await Promise.all([
      page.waitForNavigation(),
      page.getByRole('link').filter({ hasText: 'Blog ✍️' }).click(),
    ]);
    expect(page.url()).toEqual(`${baseURL}/blog`);
  });

  test('home link', async ({ page, baseURL }) => {
    await Promise.all([
      page.waitForNavigation(),
      page.getByRole('link').filter({ hasText: 'Hi 👋' }).click(),
    ]);
    expect(page.url()).toMatch(new RegExp(`^${baseURL}/?$`));
  });

  test('resume link', async ({ page }) => {
    await Promise.all([
      page.waitForNavigation(),
      page.getByRole('link').filter({ hasText: 'Hire Me 💲' }).click(),
    ]);
    expect(await page.getByText('Never Gonna Give You Up').count()).toBeGreaterThan(0);
  });
});

test('blog navigation works', async ({ page, baseURL }) => {
  await page.goto('/blog');
  // @ts-expect-error types are not correct for getByRole
  await Promise.all([page.waitForNavigation(), page.getByRole('heading[level=2]').first().click()]);
  expect(page.url()).toMatch(new RegExp(`^${baseURL}/blog/.+$`));
});

test('github navigation works', async ({ page }) => {
  await Promise.all([page.waitForNavigation(), page.getByTestId('gh-link').click()]);
  expect(page.url()).toEqual('https://github.com/bienzaaron');
});

test('npm navigation works', async ({ page }) => {
  await Promise.all([page.waitForNavigation(), page.getByTestId('npm-link').click()]);
  expect(page.url()).toEqual('https://www.npmjs.com/~ajbienz');
});

test('linkedin navigation works', async ({ page }) => {
  await Promise.all([page.waitForNavigation(), page.getByTestId('linkedin-link').click()]);
  expect(page.url()).toEqual('https://www.linkedin.com/in/abienz');
});
