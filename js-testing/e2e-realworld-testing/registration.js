import {BASE_URL} from './constants.js';
import puppeteer from 'puppeteer';

const test = async(userName, userEmail, userPass) => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(`${BASE_URL}register?_k=cs8sws`);
    await page.click('input[type="text"]');
    await page.type('input[type="text"]', userName);
    await page.click('input[type="email"]');
    await page.type('input[type="email"]', userEmail);
    await page.click('input[type="password"]');
    await page.type('input[type="password"]', userPass);
    await page.click('button[type="submit"]');
    await browser.close();
}

test('lalala331', 'lalala331@mail.ru', 'lalala331');