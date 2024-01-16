import { test, expect } from '@playwright/test';

const { chromium } = require('@playwright/test');

test('test search mysore palace',async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('about:blank');
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).fill('mysore');
  await page.getByText('Historical place · Sayyaji').click();
  //await page.pause();
  await context.close();
  await browser.close();
});