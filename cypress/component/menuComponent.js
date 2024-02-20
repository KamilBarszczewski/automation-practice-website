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
    this.btnProducts.click();
    cy.contains("h2", "All Products").should("be.visible");
  }

  cart() {
    this.btnCart.click({force: true});
    cy.contains("li", "Shopping Cart").should("be.visible");
  }

  signupLogin() {
    this.btnSignupLogin.click();
    cy.contains('h2', 'Login to your account').should('be.visible');
    cy.contains('h2', 'New User Signup!').should('be.visible');
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
    this.btnContactUs.click();
    cy.contains('h2', 'Get In Touch').should('be.visible');
  } 
  
  testCases() {;
    this.btnTestCases.click();
    cy.contains("h2", "Test Cases").should("be.visible");
  }
}

export default MenuComponent;
