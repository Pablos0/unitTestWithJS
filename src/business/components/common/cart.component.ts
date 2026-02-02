import { $ } from '@wdio/globals';

class CartButtons {
  get increaseQuantityBtn() {
    return $('[data-test="increase-quantity"]');
  }

  get addProductBtn() {
    return $('[data-test="add-to-cart"]');
  }

  get addToFavoritesBtn() {
    return $('[data-test="add-to-favorites"]');
  }

  async increaseQty() {
    await this.increaseQuantityBtn.click();
  }

  async addToCart() {
    await this.addProductBtn.click();
  }

  async addToFavorites() {
    await this.addProductBtn.click();
  }
}

export default CartButtons;
