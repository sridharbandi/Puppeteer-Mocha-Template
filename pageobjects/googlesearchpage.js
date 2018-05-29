export default class GoogleSearchPage {

    constructor(page) {
        this.page = page;
    }

    async open(){
       return this.page.goto('https://google.com', { waitUntil: 'networkidle0' })
    }

    async getTitle() {
        return this.page.title();
    }
}