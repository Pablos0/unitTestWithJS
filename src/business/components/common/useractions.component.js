class UserActions {


    get passwordNeeded() {
        return $("#password-error");
    }

    get emailNeeded() {
        return $('#email-error');
    }

    get checkout() {
        return $('[data-test="proceed-1"]');
    }

    get language() {
        return $('[data-test="language-select"]');
    }

    get frenchLanguageOption() {
        return $('[data-test="lang-fr"]');
    }

    get home() {
        return $('a[data-test="nav-home"]');
    }

    get userUnauthorized() {
        return $('#toast-container');
    }
}

export default UserActions;