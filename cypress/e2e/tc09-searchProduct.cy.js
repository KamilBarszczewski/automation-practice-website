/// <reference types="cypress" />

describe("Test Case 9: Search Product", () => {
    it("Veryfying Search on Products page", () => {
        cy.visit("/");
        cy.get('img[src="/static/images/home/logo.png"]').should("be.visible");
        cy.get('a[href="/products"]').contains(" Products").click();

        cy.contains('h2', 'All Products').should('be.visible');
        cy.get('.features_items').should('be.visible')
        cy.get('#search_product').clear();
        cy.get('#search_product').type('dress');
        cy.get('#submit_search').click();

        cy.contains('h2', 'Searched Products').should('be.visible');
    });
});