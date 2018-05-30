export default class SearchResultsPage{

    constructor(page) {
        this.page = page;
        this.LINK_SELENIUM = 'h3 a';
    }

    async isSeleniumPresent(){
        await this.page.waitForSelector(this.LINK_SELENIUM)
        const links = await this.page.evaluate(() => {
            return Array.from(document.querySelectorAll('h3 a'))
                .map(a => { return a.textContent })
        })
        return links[0];
    }
}