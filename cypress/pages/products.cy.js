/// <reference types="cypress" />

class Products {

    get product1() {
        return cy.get('a[href="/product_details/1"]').contains('View Product')
    }

    displayProduct() {
        cy.contains('h2', 'All Products').should('be.visible');
        cy.get('.features_items').should('be.visible');
        this.product1.click();

        cy.get('.product-details').should('be.visible')
        cy.contains('h2', 'Blue Top').should('be.visible');
        cy.contains('p', 'Category: Women > Tops').should('be.visible');
        cy.contains('span', 'Rs. 500').should('be.visible');
        cy.contains('b', 'Availability:').should('be.visible');
        cy.contains('b', 'Condition:').should('be.visible');
        cy.contains('b', 'Brand:').should('be.visible');
    }
}

export default Products;