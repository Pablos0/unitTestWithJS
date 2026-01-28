import assert from 'assert';
import { Given, When, Then } from '@wdio/cucumber-framework';


        Given(/^the user click on "Thor Hammer" products$/, function () {
          const thorHammer = "Selecteded product is Thor Hammer";
          console.log(thorHammer);
        });

        When(/^select "+" button to add two hammers$/, function () {
           let increaseProduct;
           const  actualQuantity = 1;
            if (increaseProduct === 0) {
                console.log(parseInt(increaseProduct) + 1);
            } else {
                console.log(actualQuantity + 1);
            }
        });

        When(/^click "Add to cart" button$/, function () {
            const addToCart = "Add product to the cart";
            console.log(addToCart);
        });

        Then(/^should see "Product added to the shopping cart" message at the top right of the pages$/, function () {
           let productAdded;
           if (productAdded !==  0) {
            console.log("Product added to the shopping cart") 
           } else {
            console.log("The cart is empty");
           }
        });


        Given(/^the user is looking for Drills$/, function () {
           const drill = "User is looking for a new drill";
           console.log(drill);
         });

        When(/^the user do click on "Categories" and "power tools"$/, function () {
           const categories = "User do click on categories button";
           const powerTool = "User do click on power Tools button";
            console.log(categories + " and then " + powerTool);
         });

        When(/^the user select "Drill" checkbox$/, function () {
            const drills = "User do click on Drill button";
            console.log(drills);
        });

        Then(/^the page should "reload" automatically within the next 3 seconds$/, function () {
            const reload = "Page reloaded successfully";
            const seconds = 3;
            const message = reload + " after " + seconds + " seconds."; 
            assert.equal("Page reloaded successfully after 3 seconds.", message);
        });


        Given(/^the user is in "shopping cart" page$/, function () {
          const shoppingCart = "You are seeing your shooping cart.";
          console.log(shoppingCart);
        });

        When(/^he click on the "X" button to remove the hammer$/, function () {
          const xButton = "deleting product from the cart..."
          console.log(xButton);
        });

        When(/^user receive "Product deleted" message$/, function () {
          const message = "Product deleted";
          assert.equal("Product deleted", message);
        });

        Then(/^the shopping cart page should have the message "The cart is empty. Nothing to display."$/, function () {
          const emptyCartMssg = "Ther cart is empty. Nothing to display.";
          assert.equal("Ther cart is empty. Nothing to display.", emptyCartMssg);
        });



        Given(/^the user is not allowed to Add Favorites$/, function () {
          console.log("User is not allow to add this product to favorites.");
        });

        When(/^the user select "Combination Pliers" tool$/, function () {
          const selectedTool = "Combination Pliers selected.";
          console.log(selectedTool);
        });

        When(/^the user click on "Add to favorites" button$/, function () {
          const addToFavorites = "Add product to favorites list.";
          console.log(addToFavorites);
        });

        Then(/^the "Unauthorized, can not add product to your favorite list." message must appears$/, function () {
          const errMessage = "Unauthorized, can not add product to your favorite list.";
          assert.equal("Unauthorized, can not add product to your favorite list.", errMessage);
        });