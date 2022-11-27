import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/blog/2-another-post');
});

test('blog entries render correctly', async ({ page }) => {
  expect(await page.getByRole('heading').textContent()).toMatch(/.+/);
  expect(await page.getByRole('paragraph').textContent()).toMatch(/.+/);
});
