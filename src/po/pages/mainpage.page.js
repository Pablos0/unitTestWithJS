import ToolsPage from "../components/common/toolspage.component";

class MainPage {

    constructor() {
        this.toolsPage = new ToolsPage();
    }
    
    async open () {
        await browser.url('https://practicesoftwaretesting.com/');
    }
}

export default MainPage; 
