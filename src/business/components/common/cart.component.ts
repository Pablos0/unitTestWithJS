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

  async increaseQty(): Promise<void> {
    await this.increaseQuantityBtn.click();
  }

  async addToCart(): Promise<void> {
    await this.addProductBtn.waitForDisplayed(); 
    await this.addProductBtn.click();
  }

  async addToFavorites(): Promise<void> {
    await this.addToFavoritesBtn.click();
  }
}

export default CartButtons;
