class ToolsPage {

    get rootEl() {
        return $('h5[data-test="product-name"]');
    }

    get selectedProduct() {
        return this.rootEl;
    }

    get productInCart() {
      return $('#toast-container .toast-message');
    }

    get category() {
        return $('a.nav-link.dropdown-toggle');
    }

    get powerTool() {
        return $('a[data-test="nav-power-tools"]');
    }

    get drills() {
        return $("label.*=Drill");
    }

    get goToCart() {
        return $('a[data-test="nav-cart"]');
    }

    get removeItem() {
        return $('a.btn.btn-danger');
    }

    get cartDisplayed() {
        return $('svg[data-icon="cart-shopping"]');
    }

    get itemDeleted() {
        return $('p.ng-star-inserted');
    }

    get cordlessDrill() {
        return $('h5.*=Cordless Drill 20V');
    }
}

export default ToolsPage;