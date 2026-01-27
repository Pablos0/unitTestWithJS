/* global $ */
import { browser } from '@wdio/globals';
import ToolsPage from '../../components/common/toolspage.component';

class MainPage {
  toolsPage: ToolsPage;
  constructor() {
    this.toolsPage = new ToolsPage();
  }

  async open() {
    await browser.url('https://practicesoftwaretesting.com/');
  }
}

export default MainPage;
