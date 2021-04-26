const puppeteer = require('puppeteer');

const test = async (userEmail, userPass) => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://react-redux.realworld.io/#/login?_k=j6dlem');
    await page.type('input[type="email"]', userEmail);
    await page.type('input[type="password"]', userPass);
    await page.click('button[type="submit"]');
    await browser.close();
}

test('lalala331@mail.ru', 'lalala331')