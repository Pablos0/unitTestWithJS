/* global describe, beforeEach, it */

import { assert, expect } from 'chai';

import MainPage from '../../business/po/pages/mainpage.page';
import Customer from '../../business/po/pages/customer.page';
import Cart from '../../business/po/pages/cart.page';
import waitHelper from '../../core/helpers/waitHelper.js';
import { beforeEach, describe, it } from 'node:test';

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

    const loginError = customer.userActions.passwordNeeded;
    expect(await loginError.getText()).to.equal('Password is required');
  });

  it('Login from cart page', async () => {
    await mainPage.toolsPage.selectedProduct.click();
    await cartActions.cartButton.addProduct.click();

    const toast = mainPage.toolsPage.productInCart;
    await waitHelper.waitForDisplayed(toast as any);

    const navCart = mainPage.toolsPage.goToCart;
    await navCart.click();
    await customer.userActions.checkout.click();
    const loginButton = customer.logIn;
    await loginButton.click();

    const errorMessage = customer.userActions.emailNeeded;
    await waitHelper.waitForDisplayed(errorMessage as any);

    const errMessage = await errorMessage.getText();
    expect(errMessage).to.equal('Email is required');
  });

  it('language change to French', async () => {
    await customer.userActions.language.click();
    await customer.userActions.frenchLanguageOption.click();

    const frenchLanguage = customer.userActions.home;
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
