const puppeteer = require('puppeteer');

async function scrape() {
    const browser = await puppeteer.launch({})
    const page = await browser.newPage()

    await page.goto('http://analysis.sesse.net/');
    const scorehtmlElement = await page.waitForSelector('#score');
    const headLineHtmlElemt = await page.waitForSelector("#headline");
    const textScore = await page.evaluate(element => element.textContent, scorehtmlElement);
    const headLine = await page.evaluate(element => element.textContent , headLineHtmlElemt);
    const players = headLine.slice(0 , headLine.indexOf(','));

    console.log(`Plyers: ${players.toUpperCase()}`)
    console.log(`${textScore}`)

    browser.close()
}


scrape()