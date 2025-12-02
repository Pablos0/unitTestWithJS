import { assert, expect } from "chai";
import MainPage from "../../po/pages/mainpage.page";
import Cart from "../../po/pages/cart.page";
import Customer from "../../po/pages/customer.page";


const mainPage = new MainPage();
const cartActions = new Cart();
const customer = new Customer();

describe('shopping cart', () => {
    beforeEach(async () => {
        await mainPage.open();
    });

    it ("Adding products to cart", async () => {
        await mainPage.toolsPage.selectedProduct.click();
        await cartActions.cartButton.item('plus').click();
        await cartActions.cartButton.item('add').click();

        const productAdded = await mainPage.toolsPage.productInCart;
        await productAdded.waitForDisplayed({ timeout: 7000 });

        const cartUpdated = await productAdded.getText();
        expect(cartUpdated).to.equal("Product added to shopping cart.");
    }) 

    it("Filtering tools", async () => {
        await mainPage.toolsPage.category.click();
        await mainPage.toolsPage.powerTool.click();
        await mainPage.toolsPage.drills.click();

        const drill = await mainPage.toolsPage.cordlessDrill20V;
        await drill.waitForDisplayed({ timeout: 7000 });

        const cordlessDrill = await drill.getText();
        cordlessDrill.should.equal('Cordless Drill 20V');
    });

    
    it("Deleting products", async () => {
        await mainPage.toolsPage.selectedProduct.click();
        await cartActions.cartButton.item('add').click();

        const toast = await mainPage.toolsPage.cartDisplayed;
        await toast.waitForDisplayed({ reverse: true });

        await mainPage.toolsPage.goToCart.click();
        await mainPage.toolsPage.removeItem.click();

        const emptyMsg = await mainPage.toolsPage.itemDeleted;
        await emptyMsg.waitForDisplayed({ timeout: 7000 });

        const messageReceived = await emptyMsg.getText();
        assert.equal(messageReceived, 'The cart is empty. Nothing to display.');
    });

    it("Adding favorites", async () => {
        await mainPage.toolsPage.selectedProduct.click();
        await cartActions.cartButton.item('favorites').click();

        const favorites = await customer.userAccount.userUnauthorized;
        await favorites.waitForDisplayed({timeout: 7000 });

        const favorite = await favorites.getText();
        expect(favorite).to.equal("Unauthorized, can not add product to your favorite list.");
    }) 
})