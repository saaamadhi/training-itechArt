const puppeteer = require('puppeteer');

test('should open home page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:4100/');
    //await page.goto('https://react-redux.realworld.io/#/?_k=1dp0o8');
    await browser.close();
})
