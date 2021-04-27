import {BASE_URL} from './constants.js';
import puppeteer from 'puppeteer';

const test = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(`${BASE_URL}settings?_k=g448rd`);
    await page.click('.btn-outline-danger');
    await browser.close();
}

test();