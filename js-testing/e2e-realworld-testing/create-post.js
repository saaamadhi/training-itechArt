import {BASE_URL} from './constants.js';
import puppeteer from 'puppeteer';

const test = async (articleName, articleAbout, articleText, articleTags) => {
    const browser = await puppeteer.launch( { headless: false });
    const page = await browser.newPage();
    await page.goto(`${BASE_URL}editor?_k=c0xxce`);
    await page.click('input.form-control.form-control-lg');
    await page.type('input.form-control.form-control-lg', articleName);
    await page.click('form fieldset fieldset.form-group:nth-child(2) input.form-control');
    await page.type('form fieldset fieldset.form-group:nth-child(2) input.form-control', articleAbout);
    await page.click('textarea');
    await page.type('textarea', articleText);
    await page.click('form fieldset fieldset.form-group:nth-child(4) input.form-control');
    await page.type('form fieldset fieldset.form-group:nth-child(4) input.form-control', articleTags);
    await page.click('form button');
    await browser.close();
}

test('bla-bla', 'bla-bla is about...', '...bla-bla-bla...', 'test');