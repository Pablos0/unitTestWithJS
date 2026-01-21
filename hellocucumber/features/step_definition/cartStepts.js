import assert from 'assert';
import { Given, When, Then } from '@cucumber/cucumber';


        Given('the user click on {string} products', function (thorHammer) {
           thorHammer = "Selecteded product is Thor Hammer";
           console.log(thorHammer);
        });

        When('select {string} button to add two hammers', function (increaseProduct) {
           const  actualQuantity = 1;
            if (increaseProduct === 0) {
                console.log(parseInt(increaseProduct) + 1);
            } else {
                console.log(actualQuantity + 1);
            }
        });

        When('click {string} button', function (addToCart) {
            addToCart = "Add product to the cart";
            return addToCart;
        });

        Then('should see {string} message at the top right of the pages', function (productAdded) {
           if (productAdded !==  0) {
            console.log("Product added to the shopping cart") 
           } else {
            console.log("The cart is empty");
           }
        });



        Given('the user is looking for Drills', function () {
           const drill = "User is looking for a new drill";
           return drill;
         });

        When('the user do click on {string} and {string}', function (categories, powerTool) {
           categories = "User do click on categories button";
           powerTool = "User do click on power Tools button";
            console.log(categories + " and then " + powerTool);
         });

        When('the user select {string} checkbox', function (drills) {
            drills = "User do click on Drill button";
            return drills;
        });

        Then('the page should {string} automatically within the next {int} seconds', function (reload, seconds) {
            reload = "Page reloaded successfully";
            seconds = 3;
            const message = reload + " after " + seconds + " seconds."; 
            assert.equal("Page reloaded successfully after 3 seconds.", message);
        });



        Given('the user is in {string} page', function (shoppingCart) {
          shoppingCart = "You are seeing your shooping cart.";
          return shoppingCart;
        });

        When('he click on the {string} button to remove the hammer', function (xButton) {
          xButton = "deleting product from the cart..."
          return xButton;
        });

        When('user receive {string} message', function (message) {
          message = "Product deleted";
          assert.equal("Product deleted", message);
        });

        Then('the shopping cart page should have the message {string}', function (emptyCartMssg) {
          emptyCartMssg = "Ther cart is empty. Nothing to display.";
          assert.equal("Ther cart is empty. Nothing to display.", emptyCartMssg);
        });



        Given('the user is not allowed to Add Favorites', function () {
          console.log("User is not allow this product to favorites.");
        });

        When('the user select {string} tool', function (selectedTool) {
          selectedTool = "Combination Pliers selected.";
          return selectedTool;
        });

        When('the user click on {string} button', function (addToFavorites) {
          addToFavorites = "Add product to favorites list.";
          return addToFavorites;
        });

        Then('the {string} message must appears', function (errMessage) {
          errMessage = "Unauthorized, can not add product to your favorite list.";
          assert.equal("Unauthorized, can not add product to your favorite list.", errMessage);
        });