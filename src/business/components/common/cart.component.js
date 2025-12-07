class CartButtons {

    get increaseQuantity() {
        return $('[data-test="increase-quantity"]');
    }

    get addProduct() {
        return $('[data-test="add-to-cart"]');
    }

    get addToFavorites() {
        return $('[data-test="add-to-favorites"]');
    }
}

export default CartButtons;