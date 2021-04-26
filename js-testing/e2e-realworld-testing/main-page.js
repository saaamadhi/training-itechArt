const puppeteer = require('puppeteer');

const test = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://react-redux.realworld.io/#/?_k=1dp0o8');
    await browser.close();
}

test();