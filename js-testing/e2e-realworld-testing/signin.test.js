const puppeteer = require('puppeteer');

test('should do signin', async (userEmail, userPass) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://react-redux.realworld.io/#/login?_k=j6dlem');
    await page.type('input[type="email"]', userEmail);
    await page.type('input[type="password"]', userPass);
    await Promise.all([
        page.waitForNavigation(),
        page.click('button[type="submit"]')
    ]);
    await browser.close();
})

test('129test129@gmail.com', 'test1289890')