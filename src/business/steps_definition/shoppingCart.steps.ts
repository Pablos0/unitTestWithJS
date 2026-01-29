import assert from 'assert';
import { expect } from 'chai';
import { Given, When, Then, BeforeAll } from '@wdio/cucumber-framework';
import MainPage from '../po/pages/mainpage.page';
import Cart from '../po/pages/cart.page';
import Customer from '../po/pages/customer.page';
import waitHelper from '../../core/helpers/waitHelper.js';

const mainPage = new MainPage();
const cartActions = new Cart();
const customer = new Customer();

        BeforeAll(async () => {
                await mainPage.open();
              });

        Given(/^the user click on "(.*)" products$/, async function (tool) {
          tool = "Thor Hammer";
          await mainPage.toolsPage.selectedProduct.click();
        });

        When(/^select "(.*)" button to add two hammers$/, async function (plus) {
          plus = "+";
          await cartActions.cartButton.addProduct.click();
        });

        When(/^click "(.*)" button$/, async function (addToCart) {
          addToCart = "Add to cart";
          await cartActions.cartButton.addProduct.click();
        });

        Then(/^should see "(.*)" message at the top right of the pages$/, async function (productAdded) {
            productAdded = mainPage.toolsPage.productInCart;
            await waitHelper.waitForDisplayed(productAdded as any);
           
            const cartUpdated = await productAdded.getText();
            expect(cartUpdated).to.equal('Product added to shopping cart.');
        });


        Given(/^the user is looking for Drills$/, async function () {
          await mainPage.toolsPage.category.click();
          await mainPage.toolsPage.powerTool.click();
          await mainPage.toolsPage.drills.click();
         });

        When(/^the user do click on "(.*)" and "(.*)"$/, function (categories, powerTools) {
          categories = mainPage.toolsPage.category.click();
          powerTools = mainPage.toolsPage.powerTool.click();
         });

        When(/^the user select "(.*)" checkbox$/, async function (drill) {
            drill = mainPage.toolsPage.cordlessDrill;
            await waitHelper.waitForDisplayed(drill as any);
          
            const cordlessDrill = await drill.getText();
            expect(cordlessDrill).to.equal('Cordless Drill 20V');
        });

        Then(/^the page should "(.*)" automatically within the next 3 seconds$/, async function (drills) {
          drills = mainPage.toolsPage.cordlessDrill;
          await waitHelper.waitForDisplayed(drills as any);
        });


        Given(/^the user is in "(.*)" page$/, async function (shoppigCart) {
          shoppigCart = mainPage.toolsPage.cartDisplayed;
          await waitHelper.waitForDisplayed(shoppigCart as any);
        });

        When(/^he click on the "(.+)" button to remove the hammer$/, async function (deleteButton) {
          deleteButton = mainPage.toolsPage.goToCart;
          await deleteButton.waitForClickable();
          await deleteButton.click();
          await mainPage.toolsPage.removeItem.click();
        });

        Then(/^the shopping cart page should have the message "(.*)"$/, async function (emptyCart) {
            emptyCart = mainPage.toolsPage.itemDeleted;
            await waitHelper.waitForDisplayed(emptyCart as any);
          
            const messageReceived = await emptyCart.getText();
            assert.equal(messageReceived, 'The cart is empty. Nothing to display.');
        });


        Given(/^the user is not allowed to Add Favorites$/, async function () {
          await mainPage.open();
          await mainPage.toolsPage.selectedProduct.click();
          await cartActions.cartButton.addToFavorites.click();
        });

        When(/^the user select "(.*)" tool$/, async function (combinationPliers) {
          combinationPliers = mainPage.toolsPage.selectedProduct.click();
        });

        When(/^the user click on "(.*)" button$/, async function (addFavorite) {
          addFavorite = cartActions.cartButton.addToFavorites.click();
        });

        Then(/^the "(.*)" message must appears$/, async function (expectedMessage) {
          const favorites = customer.userActions.userUnauthorized;
            await waitHelper.waitForDisplayed(favorites as any);
          
            const actualMessage = await favorites.getText();
            expect(actualMessage).to.include(expectedMessage);
        });

        