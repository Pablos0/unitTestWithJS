import assert from 'assert';
import { expect } from 'chai';
import { Given, When, Then } from '@wdio/cucumber-framework';
import Customer from '../po/pages/customer.page';
import MainPage from '../po/pages/mainpage.page';
import Cart from '../po/pages/cart.page';
import LogIn from '../po/pages/login.page';

const mainPage = new MainPage();
const customer = new Customer();
const cartActions = new Cart();
const logInPage = new LogIn();

Given(/^the user navigates to Practing Software web page$/, async function () {
  await mainPage.open();
});

When(/^the user click on sign in button$/, async function () {
  await customer.signIn();
});

When(
  /^the user log in with email "(.*)" and password "(.*)"$/,
  async function (email: string, password: string) {
    await logInPage.logIn(email, password);
  }
);

When(/^press Login button$/, async function () {
  await customer.logInSession();
});

Then(
  /^user should received "(.*)" message$/,
  async function (loginError: string) {
    const errorMssg = customer.userActions.invalidcredentials;
    expect(await errorMssg.getText()).to.equal(loginError);
  }
);

Given(/^the user add a combination pliers to the cart$/, async function () {
  await mainPage.open();
  await mainPage.toolsPage.selectedProduct();
  await cartActions.cartButton.addToCart();
});

When(
  /^do click in cart icon and Proceed to checkout button$/,
  async function () {
    await mainPage.toolsPage.cartPage();
    await customer.userActions.proceedCheckout();
  }
);

When(
  /^the user click on log in with his email "(.*)", but no password$/,
  async function (missingPassword: string) {
    await logInPage.logInWithoutPwd(missingPassword);
  }
);

Then(
  /^should received "(.*)" error message$/,
  async function (errorMessage: string) {
    customer.userActions.passwordNeededMsg;
    expect(errorMessage).to.equal('Password is required');
  }
);

Given(
  /^the user needs to change the language page to french from the home page$/,
  async function () {
    await mainPage.open();
  }
);

When(/^the user click in button with the little globe$/, async function () {
  await customer.userActions.changeLang();
});

When(/^select FR as prefered language$/, async function () {
  await customer.userActions.frenchLang();
});

Then(/^the page should change the language to French$/, async function () {
  await customer.userActions.changeLang();
  await customer.userActions.frenchLang();

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
