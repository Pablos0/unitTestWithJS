import { assert, expect } from "chai";
import MainPage from "../../business/po/pages/mainpage.page";
import Cart from "../../business/po/pages/cart.page";
import Customer from "../../business/po/pages/customer.page";
import waitHelper from "../../core/helpers/waitHelper.js";


const mainPage = new MainPage();
const cartActions = new Cart();
const customer = new Customer();

describe('shopping cart', () => {
    beforeEach(async () => {
        await mainPage.open();
    });

    it ("Adding products to cart", async () => {
        await mainPage.toolsPage.selectedProduct.click();
        await cartActions.cartButton.addProduct.click();

        const productAdded = await mainPage.toolsPage.productInCart;
        await waitHelper.waitForDisplayed(productAdded);

        const cartUpdated = await productAdded.getText();
        expect(cartUpdated).to.equal("Product added to shopping cart.");
    }) 

    it("Filtering tools", async () => {
        await mainPage.toolsPage.category.click();
        await mainPage.toolsPage.powerTool.click();
        await mainPage.toolsPage.drills.click();

        const drill = await mainPage.toolsPage.cordlessDrill;
        await waitHelper.waitForDisplayed(drill);

        const cordlessDrill = await drill.getText();
        cordlessDrill.should.equal('Sheet Sander'); 
    }); 
    
    it("Deleting products", async () => {
        await mainPage.toolsPage.selectedProduct.click();
        await cartActions.cartButton.addProduct.click();

        const toast = await mainPage.toolsPage.cartDisplayed;
        await waitHelper.waitForDisplayed(toast);

        await mainPage.toolsPage.goToCart.click();
        await mainPage.toolsPage.removeItem.click();

        const productDeleted = await mainPage.toolsPage.itemDeleted;
        await waitHelper.waitForDisplayed(productDeleted);

        const messageReceived = await productDeleted.getText();
        assert.equal(messageReceived, 'The cart is empty. Nothing to display.');
    });

    it("Adding favorites", async () => {
        await mainPage.toolsPage.selectedProduct.click();
        await cartActions.cartButton.addToFavorites.click();

        const favorites = await customer.userActions.userUnauthorized;
        await waitHelper.waitForDisplayed(favorites);

        const favorite = await favorites.getText();
        expect(favorite).to.equal("Unauthorized, can not add product to your favorite list.");
    }) 
})