const puppeteer = require('puppeteer');

const test = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://react-redux.realworld.io/#/settings?_k=g448rd');
    await page.click('.btn-outline-danger');
    await browser.close();
}

test();