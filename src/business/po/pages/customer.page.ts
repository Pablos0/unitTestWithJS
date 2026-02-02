/* global $ */
import UserActions from '../../components/common/useractions.component';

class Customer {
  userActions: UserActions;
  constructor() {
    this.userActions = new UserActions();
  }

  get signInBtn() {
    return $('a[data-test="nav-sign-in"]');
  }

  get logInBtn() {
    return $('input[data-test="login-submit"]');
  }

  async signIn() {
    await this.signInBtn.click();
  }

  async logInSession() {
    await this.logInBtn.click();
  }
}

export default Customer;
