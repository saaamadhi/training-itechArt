const puppeteer = require('puppeteer');

test('should find created post in the global feed by popular tag', async (tagEl) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://react-redux.realworld.io/#/?_k=5uoumf', { waitUntil: 'networkidle0' });
    /*get popular tags */
    const tag = await page.$$('.tag-list > a');
    await tag.click().then((target) => {
        const artical = await target.$$('.artical-preview');
        artical.forEach(element => {
            const title = element.$$('.preview-link > h1');
            if(title.innerHTML === tagEl){/*ok */}
            else return new Error('Error')
        });
    })
    await browser.close();
})

test('test');