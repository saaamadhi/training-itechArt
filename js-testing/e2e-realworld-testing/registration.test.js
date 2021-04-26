const puppeteer = require('puppeteer');

test('should registrate new person', async (userName, userEmail, userPass) => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://react-redux.realworld.io/#/register?_k=cs8sws');
    await page.click('input[type="text"]');
    await page.type('input[type="text"]', userName);
    await page.click('input[type="email"]');
    await page.type('input[type="email"]', userEmail);
    await page.click('input[type="password"]');
    await page.type('input[type="password"]', userPass);

    /*const [response] = await Promise.all([
        page.click('button[type="submit"]'),
        page.waitForNavigation()
    ]);*/

    await page.click('button[type="submit"]').then(() => {
        browser.on('targetchanged', async(target) => {
            const user = await target.$eval('.user-pic', el => el.getAttribute('alt'));//or target.url?
            expect(user).toBe(userName)
        });
    })

    await browser.close();
})

test('lalala333', 'lalala333@mail.ru', 'lalala333');