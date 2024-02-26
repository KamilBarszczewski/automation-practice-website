/// <reference types="cypress" />

class Cart {
  get inputSubscribe() {
    return cy.get("#susbscribe_email");
  }

  get btnSubscribe() {
    return cy.get("#subscribe");
  }

  get productPrice() {
    return cy.get('td[class="cart_price"] > p');
  }

  get productQuantity() {
    return cy.get('button[class="disabled"]');
  }

  get totalPrice() {
    return cy.get('p[class="cart_total_price"]');
  }

  get registerLogin() {
    return cy.get('a[href="/login"]').contains("Register / Login");
  }

  get btnCheckout() {
    return cy.contains(".check_out", "Proceed To Checkout");
  }

  getProductName(productId) {
    cy.get(`[href="/product_details/${productId}"]`).then((name) => {
      cy.contains(name.text()).should("exist");
    });
  }

  getProductPrice(productId) {
    cy.get(`#product-${productId}`).within(() => {
      this.productPrice.then((price) => {
        cy.contains(price.text()).should("exist");
      });
    });
  }

  getProductQuantity(productId) {
    cy.get(`#product-${productId}`).within(() => {
      this.productQuantity.then((quantity) => {
        cy.contains(quantity.text()).should("exist");
      });
    });
  }

  getTotalPrice(productId) {
    cy.get(`#product-${productId}`).within(() => {
      this.totalPrice.then((total) => {
        cy.contains(total.text()).should("exist");
      });
    });
  }

  subscribe(email) {
    cy.contains(/Subscription/i).should("exist");
    this.inputSubscribe.scrollIntoView().clear().type(email);
    this.btnSubscribe.click();
    cy.get("#success-subscribe").should("be.visible");
  }

  removeProduct(productNumber) {
    cy.get(`a[data-product-id=${productNumber}]`).click();
  }

  navRegisterLogin() {
    this.registerLogin.click();
  }

  checkout() {
    cy.contains("Shopping Cart").should("exist");
    this.btnCheckout.click();
  }
}

export default Cart;
