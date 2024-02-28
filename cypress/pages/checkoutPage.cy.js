/// <reference types="cypress" />

class CheckoutPage {
  get inputMessage() {
    return cy.get('textarea[name="message"]');
  }

  get btnPlaceOrder() {
    return cy.get('a[href="/payment"]').contains("Place Order");
  }

  placeOrder(message) {
    cy.getDataQa("checkout-info").should("exist");
    cy.get("#cart_info").should("be.visible");
    this.inputMessage.clear().type(message);
    this.btnPlaceOrder.click();
  }
}

export default CheckoutPage;
