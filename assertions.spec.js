const { test, expect } = require('@playwright/test');

test('test assertions', async ({ page }) => {

  await page.goto('https://kitchen.applitools.com/');
  await page.pause()

  //ASSERTIONS

  await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)

  const heading= await page.getByRole('heading', { name: 'The Kitchen' })

  //if(await page.$( 'page.getByRole('heading', { name: 'The Kitchen' })') )   => doesn't work
  if (await heading.count() === 1) {
    await heading.click();
  }

  console.log('clicking done')

})