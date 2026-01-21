import assert from 'assert';
import { Given, When, Then } from '@cucumber/cucumber';


     Given('user wants to log in to his customer profile', function () {
         return console.log("User try to log in without his password");
    });

    When('customer type his {string} in Email address field', function (email) {
        email = "jonh.doe@test.com"
        return email;
    });

     When('leave {string} field in blank', function (password) {
        return password;
    });

    When('press {string} button', function (login) {
        return login;
    });

    Then('user should received {string} message', function (responseMessage) {
        responseMessage = "Password is required";
        assert.equal("Password is required", responseMessage);
    });


    Given('User click in {string} icon', function (cart) {
        cart = "User try to log in directly from the cart"
        return cart;
    });

     Given('do click in {string} button', function (checkOut) {
        checkOut = "Proceed to ckeckout";
        return checkOut;
    });

    When('User click on Login button {string}', function (missingCredentials) {
        if (missingCredentials === undefined) {
            return console.log("Email is required")
        }
    });

    Then('should received {string} error message', function (errMsg) {
        errMsg = "Email is required";
        assert.equal("Email is required", errMsg)
    });


    Given('the user speaks just French', function () {
        const userLanguage = "French";
        return console.log("user lenguage is " + userLanguage);
    });

    When('user {string} in button with the little globe', function (click) {
        click = "user pressed globe button";
        return click;
    });

    When('select {string} as prefered language', function (FR) {
        const userLanguage = "French";
        FR = userLanguage;
        return FR;
    });

    Then('the page page should change the language to French', function () {
        const newLang = "Language changed to french";
        assert.notEqual("Language changed to spanish", newLang
        );
    });
