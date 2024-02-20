/// <reference types="cypress" />

class Products {

    get product1() {
        return cy.get('a[href="/product_details/1"]').contains('View Product')
    }

    get product1st() {
        return cy.get('a[data-product-id="1"]').contains('Add to cart');
    }

    get product2nd() {
        return cy.get('a[data-product-id="2"]').contains('Add to cart');
    }

    get jeans1() {
        return cy.get('a[data-product-id="33"]').contains('Add to cart');
    }

    get jeans2() {
        return cy.get('a[data-product-id="35"]').contains('Add to cart');
    }

    get jeans3() {
        return cy.get('a[data-product-id="37"]').contains('Add to cart');
    }

    get btnAddToCart() {
        return cy.get('button > .fa-shopping-cart').contains('Add to cart');
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

    getJeans1() {
        cy.contains('p', 'Soft Stretch Jeans').should('be.visible');
        this.jeans1.click();
    }

    getJeans2() {
        cy.contains('p', 'Regular Fit Straight Jeans').should('be.visible');
        this.jeans2.click();
    }

    getJeans3() {
        cy.contains('p', 'Grunt Blue Slim Fit Jeans').should('be.visible');
        this.jeans3.click();
    }

    verifyAllJeans() {
        cy.contains('a', 'Soft Stretch Jeans').should('be.visible');
        cy.contains('a', 'Regular Fit Straight Jeans').should('be.visible');
        cy.contains('a', 'Grunt Blue Slim Fit Jeans').should('be.visible');
    }

    addToCart() {
        this.btnAddToCart.click();
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