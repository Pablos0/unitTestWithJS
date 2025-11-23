class CartButtons {

    item(param) {
        const selector = {
            plus: '[data-test="increase-quantity"]',
            add: '[data-test="add-to-cart"]',
            favorites: '[data-test="add-to-favorites"]'
        };
        return $(selector[param]);
    }
}

export default CartButtons;