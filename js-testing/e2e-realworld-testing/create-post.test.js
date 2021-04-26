const puppeteer = require('puppeteer');

test('should create a post with the most popular tag', async (articalTitle, aboutArticle,  artical) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://react-redux.realworld.io/#/editor?_k=c0xxce', { waitUntil: 'networkidle0' });
    /*get most popular tag
    tags =... */
    await page.click('input:nth-child(1)');
    await page.type('input:nth-child(1)', articalTitle);
    await page.click('input:nth-child(2)');
    await page.type('input:nth-child(2)', aboutArticle);
    await page.click('textarea');
    await page.type('textarea', artical);
    await page.click('input:nth-child(3)');
    await page.type('input:nth-child(3)', tags);
    await page.click('form button').then(() => {
        /*check url */
    });
    await browser.close();
})

test('bla-bla', 'bla-bla is about...', '...bla-bla-bla...');