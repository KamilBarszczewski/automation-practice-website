/// <reference types="cypress" />

class Checkout {

    get inputMessage() {
        return cy.get('textarea[name="message"]');
    }

    get btnPlaceOrder() {
        return cy.get('a[href="/payment"]').contains("Place Order");
    }

    placeOrder(message) {
        cy.get('div[data-qa="checkout-info"]').should("be.visible");
        cy.get("#cart_info").should("be.visible");
        this.inputMessage.clear().type(message);
        this.btnPlaceOrder.click();
    }
}

export default Checkout;