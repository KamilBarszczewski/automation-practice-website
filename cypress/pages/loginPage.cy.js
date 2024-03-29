/// <reference types="cypress" />

import SignupPage from "./signupPage.cy";

class LoginPage {
  signupPage = new SignupPage();

  get signupName() {
    return cy.getDataQa("signup-name");
  }

  get signupEmail() {
    return cy.getDataQa("signup-email");
  }

  get btnSignup() {
    return cy.getDataQa("signup-button");
  }

  get loginEmail() {
    return cy.getDataQa("login-email");
  }

  get loginPassword() {
    return cy.getDataQa("login-password");
  }

  get btnLogin() {
    return cy.getDataQa("login-button");
  }

  signupUser(name, email) {
    cy.url().should("include", "/login");
    this.signupName.clear().type(name);
    this.signupEmail.clear().type(email);
    this.btnSignup.click();
  }

  loginUser(email, password) {
    cy.url().should("include", "/login");
    this.loginEmail.clear().type(email);
    this.loginPassword.clear().type(password);
    this.btnLogin.click();
  }
}

export default LoginPage;
