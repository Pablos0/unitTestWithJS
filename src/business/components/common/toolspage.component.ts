/* global $ */

class ToolsPage {
  get selectedProductBtn() {
    return $('[data-test="product-name"]');
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

  async selectedProduct() {
    await this.selectedProductBtn.click();
  }

  async toolsCategories() {
    await this.category.click();
  }

  async powerTools() {
    await this.powerToolSection.click();
  }

  async drillsFilter() {
    await this.drills.click();
  }

  async cartPage() {
    await this.goToCartBtn.click();
  }

  async removeTool() {
    await this.removeItem.click();
  }

  async cordlessDrill20V() {
    await this.cordlessDrill.click();
  }
}

export default ToolsPage;
