const puppeteer = require('puppeteer')

const main = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://unsplash.com')
  await page.screenshot({ path: 'unsplash.png' })

  await browser.close()
}

main()