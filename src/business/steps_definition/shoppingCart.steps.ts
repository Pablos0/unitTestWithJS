import { expect } from 'chai';
import { Given, When, Then, Before, BeforeAll } from '@wdio/cucumber-framework';
import MainPage from '../po/pages/mainpage.page';
import Cart from '../po/pages/cart.page';
import Customer from '../po/pages/customer.page';

const mainPage = new MainPage();
const cartActions = new Cart();
const customer = new Customer();

Given(/^user is on the Practicing Software Testing website$/, async function () {
  await mainPage.open();
});

When(/^the user select the "(.*)" product$/, async function (tool: string) {
  const thorHammer = $(`a.card*=${tool}`);
  await thorHammer.waitForDisplayed();
  await thorHammer.waitForClickable({ timeout: 6000 });
  await thorHammer.click();
});

When(/^select plus option to select two hammers$/, async function () {
  await cartActions.cartButton.increaseQty();
});

When(/^select Add to cart button$/, async function () {
  await cartActions.cartButton.addToCart();
});

Then(/^should see "(.*)" error message$/, async function (errMessage: string) {
  const receivedMessage = await mainPage.toolsPage.productInCart.getText();
  expect(receivedMessage).to.equal(errMessage);
});


When(/^the user go to Categories and power tools options at the navigation bar$/, async function () {
  await mainPage.toolsPage.toolsCategories();
  await mainPage.toolsPage.powerTools();
});

When(/^the user select Drill checkbox$/, async function () {
  await mainPage.toolsPage.drillsFilter();
});

Then(
  /^the first displayed drill must be "(.*)"$/,
  async function (cordlessDrill: string) {
    const displayedDrill = await mainPage.toolsPage.cordlessDrill.getText();
    expect(displayedDrill).to.equal(cordlessDrill);
  }
);

When(/^the user add to the cart an incorrect tool$/, async function () {
  await mainPage.toolsPage.selectedProduct();
  await cartActions.cartButton.addToCart();
});

When(/^the user go to the cart page to delete the product$/, async function () {
  await mainPage.toolsPage.cartPage();
});

When(/^he select the X button to remove the product$/, async function () {
  await mainPage.toolsPage.cartPage();
  await mainPage.toolsPage.removeTool();
});

Then(
  /^the shopping cart page should have the message "(.*)"$/,
  async function (emptyCart: string) {
    const cartEmptyMessage = await mainPage.toolsPage.cartEmptyMsg.getText();
    expect(cartEmptyMessage).to.equal(emptyCart);
  }
);


When(/^the user wants to add "(.*)" tool to favorites$/, async function (pliers: string) {
  const combinationPliers = $(`a.card*=${pliers}`);
  await combinationPliers.waitForDisplayed();
  await combinationPliers.waitForClickable({ timeout: 6000 });
  await combinationPliers.click();
});

When(/^the user request Add to favorites option$/, async function () {
  await cartActions.cartButton.addToFavorites();
});

Then(
  /^the "(.*)" message must appears$/,
  async function (expectedMessage: string) {
    const notAuthorizedMssge = await customer.userActions.userUnauthorizedMsg.getText();
    expect(notAuthorizedMssge).to.equal(expectedMessage);
  }
);
