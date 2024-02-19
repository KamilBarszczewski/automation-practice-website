/// <reference types="cypress" />

class MenuComponent {

  get btnProducts() {
    return cy.get('a[href="/products"]').contains(" Products")
  }

  get btnCart() {
    return cy.get('a[href="/view_cart"]').contains(' Cart')
  }

  get btnDeleteAcc() {
    return cy.get(".fa-trash-o");
  }

  get btnLogout() {
    return cy.get('.fa-lock')
  }

  get btnSignupLogin() {
    return cy.get('a[href="/login"]').contains(" Signup / Login")
  }

  get btnTestCases() {
    return cy.get('a[href="/test_cases"]').contains(" Test Cases")
  }

  get btnContactUs() {
    return cy.get('a[href="/contact_us"]').contains(" Contact us")
  }

  get btnContinue() {
    cy.contains("b", "Account Deleted!").should("be.visible");
    return cy.get('[data-qa="continue-button"]');
  }

  products() {
    cy.contains("h2", "Features Items").should("be.visible");
    this.btnProducts.click();
  }

  cart() {
    cy.contains("h2", "Features Items").should("be.visible");
    this.btnCart.click({force: true});
  }

  signupLogin() {
    cy.contains("h2", "Features Items").should("be.visible");
    this.btnSignupLogin.click();
  }

  logoutAccount() {
    this.btnLogout.click();
  }

  deleteAccount() {
    cy.contains("a", " Logged in as ").should("be.visible");
    this.btnDeleteAcc.click();
    this.btnContinue.click();
  }

  contactUs() {
    cy.contains("h2", "Features Items").should("be.visible");
    this.btnContactUs.click();
  } 
  
  testCases() {
    cy.contains("h2", "Features Items").should("be.visible");
    this.btnTestCases.click()
  }
}

export default MenuComponent;
