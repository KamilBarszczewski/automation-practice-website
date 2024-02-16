/// <reference types="cypress" />

describe("Test Case 6: Contact Us form", () => {
    it("Filling up form", () => {
      cy.visit("/");
      cy.get('img[src="/static/images/home/logo.png"]').should("be.visible");
      cy.get('a[href="/contact_us"]').contains(" Contact us").click();
      cy.contains('h2', 'Get In Touch').should('be.visible');
      cy.get('input[data-qa="name"]').clear();
      cy.get('input[data-qa="name"]').type('Testowy');
      cy.get('input[data-qa="email"]').clear();
      cy.get('input[data-qa="email"]').type('tescik@test.ts');
      cy.get('input[data-qa="subject"]').clear();
      cy.get('input[data-qa="subject"]').type('Temat testowy');
      cy.get('textarea[data-qa="message"]').clear();
      cy.get('textarea[data-qa="message"]').type('Wiadomosc testowa');
      cy.get('input[name="upload_file"]').selectFile('cypress/fixtures/faun.webp');
      cy.get('input[data-qa="submit-button"]').click()

      cy.contains('div', 'Success! Your details have been submitted successfully.').should('be.visible')
      cy.get('#form-section').contains(' Home').click()
      cy.get('img[src="/static/images/home/logo.png"]').should("be.visible");
    });
});