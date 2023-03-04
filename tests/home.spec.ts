import { test, expect } from '@playwright/test';

test('get all restaurants list', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText('메가반점')).toBeVisible();
  await expect(page.getByText('메리김밥')).toBeVisible();
  await expect(page.getByText('혹등고래카레')).toBeVisible();
});

test('filtering text and category', async ({ page }) => {
  await page.goto('/');

  const input = page.getByLabel('검색');
  await input.fill('메');
  await expect(page.getByText('메가반점')).toBeVisible();
  await expect(page.getByText('메리김밥')).toBeVisible();

  await page.click('button:has-text("한식")');
  await expect(page.getByText('메가반점')).toBeHidden();
  await expect(page.getByText('메리김밥')).toBeVisible();
});

test('order menus', async ({ page }) => {
  await page.goto('/');

  await page.click('button[name="#짜장면"]');
  await page.click('button[name="#짬뽕"]');
  await page.click('button[name="#김밥"]');

  const orderBtn = page.getByText('합계: 19,500원 주문');
  orderBtn.click();

  await expect(page.getByText('주문번호')).toBeVisible();
});
