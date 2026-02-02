import { expect } from 'chai';
import { Given, When, Then, BeforeAll } from '@wdio/cucumber-framework';
import MainPage from '../po/pages/mainpage.page';
import Cart from '../po/pages/cart.page';
import Customer from '../po/pages/customer.page';

const mainPage = new MainPage();
const cartActions = new Cart();
const customer = new Customer();

BeforeAll(async () => {
  await mainPage.open();
  await browser.setWindowSize(1920, 1080);
});

Given(/^the user click on "(.*)" product$/, async function (tool: string) {
  await mainPage.open();
  const thorHammer = $(`a.card*=${tool}`);
  await thorHammer.waitForClickable({ timeout: 6000 });
  await thorHammer.click();
});

When(/^select plus button to select two hammers$/, async function () {
  await cartActions.cartButton.increaseQty();
});

When(/^click Add to cart button$/, async function () {
  await cartActions.cartButton.addToCart();
});

Then(/^should see "(.*)" error message$/, async function (errMessage: string) {
  mainPage.toolsPage.productInCart;
  expect(errMessage).to.equal('You can only have one Thor Hammer in the cart');
});

Given(
  /^the user is looking for Drills and he is in the home page$/,
  async function () {
    await mainPage.open();
  }
);

When(/^the user do click on Categories and power tools$/, async function () {
  await mainPage.toolsPage.toolsCategories();
  await mainPage.toolsPage.powerTools();
});

When(/^the user select "(.*)" checkbox$/, async function (drill: string) {
  await mainPage.toolsPage.drillsFilter();
  expect(drill).to.equal('Drill');
});

Then(
  /^the first displayed drill must be "(.*)"$/,
  async function (cordlessDrill: string) {
    mainPage.toolsPage.cordlessDrill20V;
    expect(cordlessDrill).to.equal('Cordless Drill 20V');
  }
);

Given(/^the user add to the cart an incorrect tool$/, async function () {
  await mainPage.toolsPage.selectedProduct();
  await cartActions.cartButton.addToCart();
});

When(/^the user go to the cart page to delete the product$/, async function () {
  await mainPage.toolsPage.cartPage();
});

When(/^he click on the X button to remove the product$/, async function () {
  await mainPage.toolsPage.cartPage();
  await mainPage.toolsPage.removeTool();
});

Then(
  /^the shopping cart page should have the message "(.*)"$/,
  async function (emptyCart: string) {
    mainPage.toolsPage.cartEmptyMsg;
    expect(emptyCart).to.equal('The cart is empty. Nothing to display.');
  }
);

Given(
  /^the user is in Home Page and desired add a product to favorites$/,
  async function () {
    await mainPage.open();
  }
);

When(/^the user select "(.*)" tool$/, async function (pliers: string) {
  const combinationPliers = $(`a.card*=${pliers}`);
  await combinationPliers.click();
});

When(/^the user do click on Add to favorites button$/, async function () {
  await cartActions.cartButton.addToFavorites();
});

Then(
  /^the "(.*)" message must appears$/,
  async function (expectedMessage: string) {
    customer.userActions.userUnauthorizedMsg;
    expect(expectedMessage).to.equal(
      'Unauthorized, can not add product to your favorite list.'
    );
  }
);
