/// <reference types="cypress" />

describe("Test Case 5: Register User with existing email", () => {
    it("Registering user to exercise page", () => {
      cy.visit("/");
      // REGISTER USER
      cy.get('img[src="/static/images/home/logo.png"]').should("be.visible");
      cy.get('a[href="/login"]').contains(" Signup / Login").click();
      cy.url().should("include", "/login");
      cy.contains("h2", "New User Signup!").should("be.visible");
      cy.get('input[data-qa="signup-name"]').type("Tescik");
      cy.get('input[data-qa="signup-email"]').type("tescik@test.ts");
      cy.get('button[data-qa="signup-button"]').click();

      cy.contains('p', 'Email Address already exist!').should('be.visible')

    });
});