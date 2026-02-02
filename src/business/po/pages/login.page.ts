class LogIn {
  constructor() {}

  get email() {
    return $('input[data-test="email"]');
  }

  get passwordField() {
    return $('input[data-test="password"]');
  }

  get logInBtn() {
    return $('input[data-test="login-submit"]');
  }

  async logIn(email: string, password: string) {
    await this.email.setValue(email);
    await this.passwordField.setValue(password);
    await this.logInBtn.click();
  }

  async logInWithoutPwd(email: string) {
    await this.email.setValue(email);
    await this.logInBtn.click();
  }
}

export default LogIn;
