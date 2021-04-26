const puppeteer = require('puppeteer');

test('should do logout', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://react-redux.realworld.io/#/settings?_k=g448rd');
    const [response] = await Promise.all([
        page.click('.btn-outline-danger'),
        page.waitForNavigation()
    ]);
    /*if(response.ok){
        browser.close();
    }else return new Error('Error');*/
})