import {BASE_URL} from './constants.js';
import puppeteer from 'puppeteer';

const test = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(`${BASE_URL}?_k=1dp0o8`);
    await browser.close();
}

test();