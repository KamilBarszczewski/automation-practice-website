/// <reference types="cypress" />

class MenuComponent {
  get btnHome() {
    return cy.get('[href="/"]');
  }

  get btnProducts() {
    return cy.linkToPage("products").contains(" Products");
  }

  get btnCart() {
    return cy.linkToPage("view_cart").contains(" Cart");
  }

  get btnDeleteAcc() {
    return cy.get(".fa-trash-o");
  }

  get btnLogout() {
    return cy.get(".fa-lock");
  }

  get btnSignupLogin() {
    return cy.linkToPage("login").contains(" Signup / Login");
  }

  get btnTestCases() {
    return cy.linkToPage("test_cases").contains(" Test Cases");
  }

  get btnContactUs() {
    return cy.linkToPage("contact_us").contains(" Contact us");
  }

  get btnContinue() {
    return cy.getDataQa("continue-button");
  }

  openHomeTab() {
    this.btnHome.click();
  }

  openProductsTab() {
    this.btnProducts.click();
  }

  openCartTab() {
    this.btnCart.click({ force: true });
  }

  openLoginTab() {
    this.btnSignupLogin.click();
  }

  logoutUserTab() {
    this.btnLogout.click();
  }

  deleteUserTab() {
    this.btnDeleteAcc.click();
    cy.contains(/account deleted/i).should("exist");
    this.btnContinue.click();
    cy.contains(/account deleted/i).should("not.exist");
  }

  openContactUsTab() {
    this.btnContactUs.click();
  }

  openTestCasesPage() {
    this.btnTestCases.click();
  }
}

export default MenuComponent;
