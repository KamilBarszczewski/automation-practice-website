/// <reference types="cypress" />

class Products {

    get product1() {
        return cy.get('a[href="/product_details/1"]').contains('View Product')
    }

    get product1st() {
        // cy.get('.single-products').contains('Blue Top').trigger('mouseover')
        return cy.get('a[data-product-id="1"]').contains('Add to cart');
    }

    get product2nd() {
        return cy.get('a[data-product-id="2"]').contains('Add to cart');
    }

    get1Product() {
        this.product.click()
    }

    getFirstProduct() {
        this.product1st.click()
    }

    getSecondProduct() {
        this.product2nd.click();
    }

    displayFirstProduct() {
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