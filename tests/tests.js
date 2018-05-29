import assert from "assert";
import puppeteer from "puppeteer";
import GoogleSearchPage from "../pageobjects/googlesearchpage";

let browser
let page
let googlesearchpage

before(async () => {
    browser = await puppeteer.launch()
    page = await browser.newPage()
    googlesearchpage = new GoogleSearchPage(page)
});

describe('Check Google Homepage', () => {
    it('has title "Google"', async () => {
        await googlesearchpage.open()
        const title = await googlesearchpage.getTitle()
        assert.equal(title, 'Google')
    });
});

after(async () => {
    await browser.close()
});