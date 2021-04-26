const puppeteer = require('puppeteer');

const test = async (articleName, articalAbout, articalText, articalTags) => {
    const browser = await puppeteer.launch( { headless: false });
    const page = await browser.newPage();
    await page.goto('https://react-redux.realworld.io/#/editor?_k=c0xxce');
    await page.click('input:nth-child(1)');
    await page.type('input:nth-child(1)', articleName);
    await page.click('input:nth-child(2)');
    await page.type('input:nth-child(2)', articalAbout);
    await page.click('textarea');
    await page.type('textarea', articalText);
    await page.click('input:nth-child(3)');
    await page.type('input:nth-child(3)', articalTags);
    await page.click('form button');
    await browser.close();
}

test('bla-bla', 'bla-bla is about...', '...bla-bla-bla...', 'test');