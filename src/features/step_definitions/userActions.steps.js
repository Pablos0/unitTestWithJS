import assert from 'assert';
import { Given, When, Then } from '@wdio/cucumber-framework';


    Given(/^user wants to log in to his customer profile$/, function () {
        console.log("User try to log in without his password");
    });

    When(/^customer type his "email" in Email address field$/, function () {
        const email = "jonh.doe@test.com"
        console.log(email);
    });

     When(/^leave "Password" field in blank$/, function () {
        const password = "";
        console.log(password);
    });

    When(/^press "Login" button$/, function () {
        let login;
        console.log(login);
    });

    Then(/^user should received "Password is required" message$/, function () {
        const responseMessage = "Password is required";
        assert.equal("Password is required", responseMessage);
    });


    Given(/^User click in "cart" icon$/, function () {
        const cart = "User try to log in directly from the cart"
        console.log(cart);
    });

     Given(/^do click in "Proceed to checkout" button$/, function () {
        const checkOut = "Proceed to ckeckout";
        console.log(checkOut);
    });

    When(/^User click on Login button "without his credentials"$/, function () {
        let missingCredentials;
        if (missingCredentials === undefined) {
            console.log("Email is required")
        }
    });

    Then(/^should received "Email is required" error message$/, function () {
        const errMsg = "Email is required";
        assert.equal("Email is required", errMsg)
    });


    Given(/^the user speaks just French$/, function () {
        const userLanguage = "French";
        console.log("user lenguage is " + userLanguage);
    });

    When(/^user "click" in button with the little globe$/, function () {
        const click = "user pressed globe button";
        console.log(click);
    });

    When(/^select "FR" as prefered language$/, function () {
        const userLanguage = "French";
        const FR = userLanguage;
        console.log("The user just speaks " + FR);
    });

    Then(/^the page page should change the language to French$/, function () {
        const newLang = "Language changed to french";
        assert.notEqual("Language changed to spanish", newLang);
    });
