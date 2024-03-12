/// <reference types="cypress" />

class CheckoutPage {
  get inputMessage() {
    return cy.get('textarea[name="message"]');
  }

  get btnPlaceOrder() {
    return cy.get('a[href="/payment"]').contains("Place Order");
  }

  get verifyProductName() {
    return cy.get(".cart_description").within(() => {
      cy.get("h4").then((name) => {
        cy.contains(name.text()).should("exist");
      });
    });
  }

  get verifyProdDescription() {
    return cy.get(".cart_description").within(() => {
      cy.get("p").then((description) => {
        cy.contains(description.text()).should("exist");
      });
    });
  }

  get verifyProductPrice() {
    return cy.get(".cart_price").within(() => {
      cy.get("p").then((price) => {
        cy.contains(price.text()).should("exist");
      });
    });
  }

  get verifyProductQuantity() {
    return cy.get(".cart_quantity").within(() => {
      cy.get("button").then((quantity) => {
        cy.contains(quantity.text()).should("exist");
      });
    });
  }

  get verifyProductTotal() {
    return cy.get(".cart_total").within(() => {
      cy.get("p").then((total) => {
        cy.contains(total.text()).should("exist");
      });
    });
  }

  get verifyTotalPrice() {
    return cy.get("tbody").within(() => {
      cy.get("tr")
        .last()
        .within(() => {
          cy.get("td")
            .last()
            .within(() => {
              cy.get(".cart_total_price").then((totalPrice) => {
                cy.contains(totalPrice.text()).should("exist");
              });
            });
        });
    });
  }

  verifyYourOrder(productId) {
    cy.get(`tr[id="product-${productId}"]`).within(() => {
      this.verifyProductName;
      this.verifyProdDescription;
      this.verifyProductPrice;
      this.verifyProductQuantity;
      this.verifyProductTotal;
    });
  }

  verifyTotalPrice() {
    this.verifyTotalPrice;
  }

  fillPlaceOrderForm(message) {
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
