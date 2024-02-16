/// <reference types="cypress" />

describe("Test Case 8: Verify All Products and product detail page", () => {
    it("Veryfying products page", () => {
        cy.visit("/");
        cy.get('img[src="/static/images/home/logo.png"]').should("be.visible");
        cy.get('a[href="/products"]').contains(" Products").click();

        cy.contains('h2', 'All Products').should('be.visible');
        cy.get('.features_items').should('be.visible')
        cy.get('a[href="/product_details/1"]').contains('View Product').click()

        cy.get('.product-details').should('be.visible')
        cy.contains('h2', 'Blue Top').should('be.visible');
        cy.contains('p', 'Category: Women > Tops').should('be.visible');
        cy.contains('span', 'Rs. 500').should('be.visible');
        cy.contains('b', 'Availability:').should('be.visible');
        cy.contains('b', 'Condition:').should('be.visible');
        cy.contains('b', 'Brand:').should('be.visible');
    });
});