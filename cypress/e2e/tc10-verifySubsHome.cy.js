/// <reference types="cypress" />

describe("Test Case 10: Verify Subscription in home page", () => {
    it("Veryfying Subscription", () => {
        cy.visit("/");
        cy.get('img[src="/static/images/home/logo.png"]').should("be.visible");
        
        cy.contains('h2', 'Subscription').should('be.visible');
        cy.get('#susbscribe_email').scrollIntoView().clear().type('tescik@test.ts');
        cy.get('#subscribe').click();
        cy.get('#success-subscribe').should('be.visible')
    });
});