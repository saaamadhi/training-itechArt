const puppeteer = require('puppeteer');

test('should registrate new person', async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('http://localhost:4100/register');
    await page.click('input[type="text"]');
    await page.type('input[type="text"]', 'Jack123345');
    await page.click('input[type="email"]');
    await page.type('input[type="email"]', 'jack123345@gmail.com');
    await page.click('input[type="password"]');
    await page.type('input[type="password"]', 'jack1233345');

    await page.click('button[type="submit"]').then(() => {
        /*const userName = await page.$eval('.user-pic', el => el.getAttribute('alt'));
        expect(userName).toBe('Jack123345')*/
    })
    //await browser.close();
})