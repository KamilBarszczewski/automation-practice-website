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

  verifyDeliveryAddress() {
    cy.get("#address_delivery").within(() => {
      cy.contains(/Mr. Testeusz Testeuszewicz/i).should("exist");
      cy.contains(/Test-Soft Testowa 11 Testowa 21/i).should("exist");
      cy.contains(/Testowo Testowe Nevada 555333111/i).should("exist");
      cy.contains(/United States 0021455535299/i).should("exist");
    });
  }

  verifyInvoiceAddress() {
    cy.get("#address_invoice").within(() => {
      cy.contains(
        /Mr. Testeusz Testeuszewicz Test-Soft Testowa 11 Testowa 21 Testowo Testowe Nevada 555333111 United States 0021455535299/i
      ).should("exist");
    });
  }
}

export default CheckoutPage;
