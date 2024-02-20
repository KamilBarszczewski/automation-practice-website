/// <reference types="cypress" />

class Cart {

    get registerLogin() {
        return cy.get('a[href="/login"]').contains("Register / Login")
    }

    get btnCheckout() {
        return cy.contains(".check_out", "Proceed To Checkout")
    }

    
    navRegisterLogin() {
        this.registerLogin.click()
    }

    checkout() {
        cy.get('.active').contains('Shopping Cart').should('be.visible')
        this.btnCheckout.click()
    }
}

export default Cart;
