 import { assert, expect } from "chai";
 import MainPage from "../../po/pages/mainpage.page";
 import Customer from "../../po/pages/customer.page";
 import Cart from "../../po/pages/cart.page";


 const mainPage = new MainPage();
 const customer = new Customer();
 const cartActions = new Cart(); 
 
 describe('User account', () => { 
    beforeEach(async () => {
        await mainPage.open();
    });

    it("Customer log in",  async () => {
        await customer.userAccount.signIn.click();
        await customer.userAccount.logIn.click();

        const loginError = await customer.userAccount.passwordNeeded;
        expect(await loginError.getText()).to.equal("Password is required");
    });
    
    it("Login from cart page", async () => {
        await mainPage.toolsPage.selectedProduct.click();
        await cartActions.cartButton.item('add').click();

        const toast = await mainPage.toolsPage.productInCart;
        await toast.waitForDisplayed({ timeout: 7000 });

        const navCart = await mainPage.toolsPage.goToCart;
        await navCart.click();
        await  customer.userAccount.checkout.click();
        const loginButton = await  customer.userAccount.logIn;
        await loginButton.click();

        const errorMessage = await customer.userAccount.emailNeeded;
        await errorMessage.waitForDisplayed({ timeout: 7000 });

        const errMessage = await errorMessage.getText();
        errMessage.should.equal('Email is required');
    });

    it ("language change to French", async () => {
        await customer.userAccount.language.click();
        await customer.userAccount.frLanguage.click();

        const frLang = await customer.userAccount.home;
        await frLang.waitUntil(async function () {
            return (await this.getText()) === 'Accueil'
        }, {
            timeoutMsg: 'Expected text to change to "Accueil"'
        }); 

        const newLanguage = await frLang.getText();
        assert.equal(newLanguage, 'Accueil');
    })
 }) 