/// <reference types="cypress" />

class PageComponent {

    get inputSearch() {
        return cy.get('#search_product')
    }

    get inputSubscribe() {
        return cy.get('#susbscribe_email')
    }

    get btnSearch() {
        return cy.get('#submit_search')
    }

    get btnSubscribe() {
        return cy.get('#subscribe')
    }

    get btnContinueShopping() {
        return cy.get('button[data-dismiss="modal"]')
        .contains("Continue Shopping");
    }

    get linkViewCart() {
        return cy.get('a[href="/view_cart"] > u');
    }

    continueShopping() {
        cy.contains('h4', 'Added!').should('be.visible');
        this.btnContinueShopping.click()
    }
    
    searchProduct(productName) {
        cy.contains('h2', 'All Products').should('be.visible');
        cy.get('.features_items').should('be.visible');
        this.inputSearch.clear().type(productName);
        this.btnSearch.click();
        cy.contains('h2', 'Searched Products').should('be.visible');
    }

    subscribe(email) {
        cy.contains('h2', 'Subscription').should('be.visible');
        this.inputSubscribe.scrollIntoView().clear().type(email);
        this.btnSubscribe.click();
        cy.get('#success-subscribe').should('be.visible');
    }

    viewCart() {
        cy.contains('u', 'View Cart').should('be.visible')
        this.linkViewCart.click()
    }

}

export default PageComponent;