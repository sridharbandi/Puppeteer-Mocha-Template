export default class GoogleSearchPage {

    constructor(page) {
        this.page = page;
        this.SEARCH_BOX = 'input[name=q]';
    }

    async open(){
       return this.page.goto('https://google.com', { waitUntil: 'networkidle0' })
    }

    async getTitle() {
        return this.page.title();
    }

    async searchFor(searchterm){
        await this.page.waitFor(this.SEARCH_BOX);
        await this.page.type(this.SEARCH_BOX, searchterm, { delay: 100 });
    }
}