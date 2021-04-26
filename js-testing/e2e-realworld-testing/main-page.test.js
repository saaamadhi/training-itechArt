const puppeteer = require('puppeteer');

test('should open home page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://react-redux.realworld.io/#/?_k=1dp0o8', { waitUntil: 'networkidle0' });
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
    await browser.close();
})

test();