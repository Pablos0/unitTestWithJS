import CartButtons from '../../components/common/cart.component';

class Cart {
  cartButton: CartButtons;
  constructor() {
    this.cartButton = new CartButtons();
  }
}

export default Cart;
