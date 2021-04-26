const puppeteer = require('puppeteer');

const test = async (tagEl) => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://react-redux.realworld.io/#/?_k=5uoumf');
    await page.click('tag-list > a');
}

test('test');