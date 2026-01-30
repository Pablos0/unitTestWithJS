import assert from 'assert';
import { expect } from 'chai';
import { Given, When, Then, BeforeAll } from '@wdio/cucumber-framework';
import Customer from '../po/pages/customer.page';
import MainPage from '../po/pages/mainpage.page';
import Cart from '../po/pages/cart.page';
import waitHelper from '../../core/helpers/waitHelper';

const mainPage = new MainPage();
const customer = new Customer();
const cartActions = new Cart();


    Given(/^user wants to log in to his customer profile$/, async function () {
        await customer.signIn.click();
        await customer.logIn.click();
    });

    When(/^customer type his "(.*)" in Email address field$/, function (email) {
        email = "jonh.doe@test.com"
        console.log(email);
    });

     When(/^leave Password field in blank$/, async function () {
        await customer.signIn.click();
        await customer.logIn.click();
        
        const loginError = customer.userActions.passwordNeeded;
        expect(await loginError.getText()).to.equal('Password is required');
    });

    When(/^press "(.*)" button$/, async function (logIn) {
        await customer.signIn.click();
        logIn = customer.logIn.click();
    });

    Then(/^user should received "(.*)" message$/, async function (loginError) {
        loginError = customer.userActions.passwordNeeded;
        expect(await loginError.getText()).to.equal('Password is required');
    });


    Given(/^User click in "(.*)" icon$/, async function (cart) {
        cart = mainPage.open();
        await mainPage.toolsPage.selectedProduct.click();
        await cartActions.cartButton.addProduct.click();
        
        const toast = mainPage.toolsPage.productInCart;
        await waitHelper.waitForDisplayed(toast as any);
        
        const navCart = mainPage.toolsPage.goToCart;
        await navCart.click();
    });

     Given(/^do click in "(.*)" button$/, function (proceedCheckout) {
        proceedCheckout = customer.userActions.checkout.click();
    });

    When(/^User click on Login button "(.*)"$/, async function (loginButton) {
        loginButton = customer.logIn;
        await loginButton.click();
    });

    Then(/^should received "(.*)" error message$/, async function (errorMessage) {
        errorMessage = customer.userActions.emailNeeded;
        await waitHelper.waitForDisplayed(errorMessage as any);
        
        const errMessage = await errorMessage.getText();
        expect(errMessage).to.equal('Email is required');
    });


    Given(/^the user speaks just French$/, function () {
        const userLanguage = "French";
        console.log("user lenguage is " + userLanguage);
    });

    When(/^user "(.*)" in button with the little globe$/, function (click) {
        click = customer.userActions.language.click();
    });

    When(/^select "(.*)" as prefered language$/, function (FR) {
        FR = customer.userActions.frenchLanguageOption.click();
    });

    Then(/^the page page should change the language to French$/, async function () {
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
