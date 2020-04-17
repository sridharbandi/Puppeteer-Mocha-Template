export default class SearchResultsPage{

    constructor(page) {
        this.page = page;
        this.LINK_SELENIUM = '.rc h3';
    }

    async isSeleniumPresent(){
        await this.page.waitForSelector(this.LINK_SELENIUM)
        const links = await this.page.evaluate(() => {
            return Array.from(document.querySelectorAll('.rc h3'))
                .map(a => { return a.textContent })
        })
        return links[0];
    }
}