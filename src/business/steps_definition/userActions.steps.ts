import assert from 'assert';
import { expect } from 'chai';
import { Given, When, Then, Before } from '@wdio/cucumber-framework';
import Customer from '../po/pages/customer.page';
import MainPage from '../po/pages/mainpage.page';
import Cart from '../po/pages/cart.page';
import LogIn from '../po/pages/login.page';

const mainPage = new MainPage();
const customer = new Customer();
const cartActions = new Cart();
const logInPage = new LogIn();


Given(/^user is on the Practice Software Testing website$/, async function () {
  await mainPage.open();
});

When(/^the user select signIn to his account$/, async function () {
  await customer.signIn();
});

When(
  /^the user log in with email "(.*)" and password "(.*)"$/,
  async function (email: string, password: string) {
    await logInPage.logIn(email, password);
  }
);

When(/^press LogIn button$/, async function () {
  await customer.logInSession();
});

Then(
  /^user should received "(.*)" message$/,
  async function (loginError: string) {
    const errorMssg = await customer.userActions.invalidCredentials.getText();
    expect(errorMssg).to.equal(loginError);
  }
);

When(/^a combination pliers has been added to the cart and user proceed to checkout$/, async function () {
  await mainPage.toolsPage.selectedProduct();
  await cartActions.cartButton.addToCart();
  await mainPage.toolsPage.cartPage();
  await customer.userActions.proceedCheckout();
});

When(
  /^the user select the LogIn option and type his email "(.*)", but no password$/,
  async function (emailTyped: string) {
    await logInPage.logInWithoutPwd(emailTyped);
  }
);

Then(
  /^should received "(.*)" error message$/,
  async function (errorMessage: string) {
    const passwordNeededMsg = await customer.userActions.passwordNeededMsg.getText();
    expect(passwordNeededMsg).to.equal(errorMessage);
  }
);

When(/^the user select the little globe icon at the top right to change the language$/, async function () {
  await customer.userActions.changeLang();
});

When(/^select FR as preferred language$/, async function () {
  await customer.userActions.frenchLang();
});

Then(/^the page should change the language to French$/, async function () {
  const frenchLanguage = customer.userActions.home;
  await frenchLanguage.waitUntil(
    async () => {
      return (await frenchLanguage.getText()) === 'Accueil';
    },
    {
      timeoutMsg: 'Expected text to change to "Accueil"',
    }
  );

  const newLanguage = await frenchLanguage.getText();
  assert.equal(newLanguage, 'Accueil');
});

// This is a line of test