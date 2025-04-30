import { test, expect } from '@playwright/test'

test('has 20 images and finds Rick Sanchez', async ({ page }) => {
  await page.goto('/');

  // Expect exactly 20 images on the page
  const images = page.locator('img');
  await expect(images).toHaveCount(20);

  // Wait for and check for a specific image by alt text
  const rickImage = page.locator('img[alt="Rick Sanchez"]');

  await expect(rickImage).toBeVisible();
});
