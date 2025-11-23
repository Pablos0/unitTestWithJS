class ToolsPage {

    get rootEl() {
        return $('h5[data-test="product-name"]');
    }

    get selectedProduct() {
        return this.rootEl;
    }

    get productInCart() {
        return $('#toast-container');
    }

    get categorie() {
        return $('a.nav-link.dropdown-toggle');
    }

    get powerTool() {
        return $('a[data-test="nav-power-tools"]');
    }

    get drills() {
        return $('input.icheck');
    }

    get goToCart() {
        return $('a[data-test="nav-cart"]');
    }

    get removeItem() {
        return $('a.btn.btn-danger');
    }

    get cartDisplayed() {
        return $('.toast-body');
    }

    get itemDeleted() {
        return $('p.ng-star-inserted');
    }

    get cordlessDrill20V() {
        return $('h5*=Cordless Drill 20V');
    }
}

export default ToolsPage;