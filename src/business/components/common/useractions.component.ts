/* global $ */
class UserActions {
  get passwordNeededMsg() {
    return $('#password-error');
  }

  get emailNeededMsg() {
    return $('#email-error');
  }

  get invalidCredentials() {
    return $('.help-block');
  }

  get checkout() {
    return $('[data-test="proceed-1"]');
  }

  get languageBtn() {
    return $('[data-test="language-select"]');
  }

  get frenchLanguageOption() {
    return $('[data-test="lang-fr"]');
  }

  get home() {
    return $('a[data-test="nav-home"]');
  }

  get userUnauthorizedMsg() {
    return $('#toast-container');
  }

  async proceedCheckout() {
    await this.checkout.click();
  }

  async changeLang() {
    await this.languageBtn.click();
  }

  async frenchLang() {
    await this.frenchLanguageOption.click();
  }
}

export default UserActions;
