/* global $ */
import UserActions from '../../components/common/useractions.component';

class Customer {
  userActions: UserActions;
  constructor() {
    this.userActions = new UserActions();
  }

  get signIn() {
    return $('a[data-test="nav-sign-in"]');
  }

  get logIn() {
    return $('input[data-test="login-submit"]');
  }
}

export default Customer;
