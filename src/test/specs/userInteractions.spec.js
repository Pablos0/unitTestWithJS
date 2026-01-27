/* global describe, beforeEach, it */

import { assert, expect } from 'chai';
import MainPage from '../../business/po/pages/mainpage.page';
import Customer from '../../business/po/pages/customer.page';
import Cart from '../../business/po/pages/cart.page';
import waitHelper from '../../core/helpers/waitHelper.js';

const mainPage = new MainPage();
const customer = new Customer();
const cartActions = new Cart();

describe('User account', () => {
  beforeEach(async () => {
    await mainPage.open();
  });

  it('Customer log in', async () => {
    await customer.signIn.click();
    await customer.logIn.click();

    const loginError = await customer.userActions.passwordNeeded;
    expect(await loginError.getText()).to.equal('Password is required');
  });

  it('Login from cart page', async () => {
    await mainPage.toolsPage.selectedProduct.click();
    await cartActions.cartButton.addProduct.click();

    const toast = await mainPage.toolsPage.productInCart;
    await waitHelper.waitForDisplayed(toast);

    const navCart = await mainPage.toolsPage.goToCart;
    await navCart.click();
    await customer.userActions.checkout.click();
    const loginButton = await customer.logIn;
    await loginButton.click();

    const errorMessage = await customer.userActions.emailNeeded;
    await waitHelper.waitForDisplayed(errorMessage);

    const errMessage = await errorMessage.getText();
    errMessage.should.equal('Email is required');
  });

  it('language change to French', async () => {
    await customer.userActions.language.click();
    await customer.userActions.frenchLanguageOption.click();

    const frenchLanguage = await customer.userActions.home;
    await frenchLanguage.waitUntil(
      async function () {
        return (await this.getText()) === 'Accueil';
      },
      {
        timeoutMsg: 'Expected text to change to "Accueil"',
      }
    );

    const newLanguage = await frenchLanguage.getText();
    assert.equal(newLanguage, 'Accueil');
  });
});
