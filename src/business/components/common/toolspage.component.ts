/* global $ */

class ToolsPage {
  get selectedProductBtn() {
    return $('h5[data-test="product-name"]');
  }

  get productInCart() {
    return $('#toast-container .toast-message');
  }

  get category() {
    return $('a.nav-link.dropdown-toggle');
  }

  get powerToolSection() {
    return $('a[data-test="nav-power-tools"]');
  }

  get drills() {
    return $('label.*=Drill');
  }

  get goToCartBtn() {
    return $('a[data-test="nav-cart"]');
  }

  get removeItem() {
    return $('a.btn.btn-danger');
  }

  get cartEmptyMsg() {
    return $('p.ng-star-inserted');
  }

  get cordlessDrill() {
    return $('h5.*=Cordless Drill 20V');
  }

  async selectedProduct(): Promise<void> {
    await this.selectedProductBtn.waitForDisplayed();
    await this.selectedProductBtn.click();
  }

  async toolsCategories(): Promise<void> {
    await this.category.click();
  }

  async powerTools(): Promise<void> {
    await this.powerToolSection.waitForDisplayed();
    await this.powerToolSection.click();
  }

  async drillsFilter(): Promise<void> {
    await this.drills.waitForDisplayed();
    await this.drills.click();
  }

  async cartPage(): Promise<void> {
    await this.goToCartBtn.waitForDisplayed();
    await this.goToCartBtn.click();
  }

  async removeTool(): Promise<void> {
    await this.removeItem.click();
  }

  async cordlessDrill20V(): Promise<void> {
    await this.cordlessDrill.waitForDisplayed();
    await this.cordlessDrill.click();
  }
}

export default ToolsPage;
