/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-extraneous-dependencies */

import playwright from 'playwright';

(async () => {
  const browser = await playwright.chromium.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto('https://www.melon.com/chart/index.htm');

  const linkTexts = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.ellipsis')).map(
      (link) => link.innerText
    );
  });


 