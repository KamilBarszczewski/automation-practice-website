/// <reference types="cypress" />

class MenuComponent {
  get btnProducts() {
    return cy.getSubpage("products").contains(" Products");
  }

  get btnCart() {
    return cy.getSubpage("view_cart").contains(" Cart");
  }

  get btnDeleteAcc() {
    return cy.get(".fa-trash-o");
  }

  get btnLogout() {
    return cy.get(".fa-lock");
  }

  get btnSignupLogin() {
    return cy.getSubpage("login").contains(" Signup / Login");
  }

  get btnTestCases() {
    return cy.getSubpage("test_cases").contains(" Test Cases");
  }

  get btnContactUs() {
    return cy.getSubpage("contact_us").contains(" Contact us");
  }

  get btnContinue() {
    return cy.getDataQa("continue-button");
  }

  products() {
    this.btnProducts.click();
    cy.location("pathname").should("equal", "/products");
    cy.contains(/All Products/i).should("exist");
  }

  cart() {
    this.btnCart.click({ force: true });
    cy.location("pathname").should("equal", "/view_cart");
    cy.contains(/Shopping Cart/i).should("exist");
  }

  signupLogin() {
    this.btnSignupLogin.click();
    cy.contains("h2", "Login to your account").should("be.visible");
    cy.contains("h2", "New User Signup!").should("be.visible");
  }

  logoutUser() {
    this.btnLogout.click();
  }

  deleteUser() {
    this.btnDeleteAcc.click();
    cy.contains(/account deleted/i).should("exist");
    this.btnContinue.click();
    cy.contains(/account deleted/i).should("not.exist");
  }

  contactUs() {
    this.btnContactUs.click();
    cy.location("pathname").should("equal", "/contact_us");
    cy.contains(/contact us/i).should("exist");
  }

  testCases() {
    this.btnTestCases.click();
    cy.contains(/Test Cases/i).should("exist");
  }
}

export default MenuComponent;
