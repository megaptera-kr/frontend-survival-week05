import { test, expect } from '@playwright/test';

test('Filter Food', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: '식당 검색창' })).toBeVisible();

  const searchInput = page.getByLabel('검색');

  await searchInput.fill('메리김밥');

  await expect(page.getByText('제육김밥')).toBeVisible();

  await searchInput.fill('메가반점');

  await expect(page.getByText('짜장면')).toBeVisible();

  await searchInput.fill('아무거나');

  await expect(page.getByText('짜장면')).toBeHidden();

  await page.goto('/');

  const radioBtn = page.getByRole('radio', { name: '한식' });

  await radioBtn.click();

  await expect(page.getByText('메리김밥')).toBeVisible();

  await expect(page.getByText('메가반점')).toBeHidden();
});

test('Cart', async ({ page }) => {
  await page.goto('/');

  const addBtn = await page.waitForSelector('button[name="#짜장면"]');

  await addBtn.click();
  await addBtn.click();

  await expect(page.getByText('합계: 8000원 주문')).toBeVisible();

  const removeBtn = page.getByRole('button', { name: '짜장면제거' });

  await removeBtn.click();

  await expect(page.getByText('합계: 0원 주문')).toBeVisible();
});

test('When order complete display receipt ', async ({ page }) => {
  await page.goto('/');

  const addBtn = await (page.waitForSelector('button[name="#짜장면"]'));

  await addBtn.click();

  const orderBtn = page.getByRole('button', { name: '주문하기' });

  await orderBtn.click();

  await expect(page.getByRole('table', { name: '영수증' })).toBeVisible();
});

test('Receipts disappear after 5 seconds', async ({ page }) => {
  await page.goto('/');

  const addBtn = await page.waitForSelector('button[name="#짜장면"]');

  await addBtn.click();

  const orderBtn = page.getByRole('button', { name: '주문하기' });

  await orderBtn.click();

  // eslint-disable-next-line playwright/no-wait-for-timeout
  await page.waitForTimeout(5000);

  await expect(page.getByRole('table', { name: '영수증' })).toBeHidden();
  await expect(page.getByRole('heading', { name: '[영수증 나오는 곳]' })).toBeVisible();
});
