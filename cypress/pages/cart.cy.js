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

  getProductPrice(productId) {
    cy.get(`#product-${productId}`).within(() => {
      this.productPrice.then((price) => {
        cy.contains(price.text());
      });
    });
  }

  getProductQuantity(productId) {
    cy.get(`#product-${productId}`).within(() => {
      this.productQuantity.then((quantity) => {
        cy.contains(quantity.text());
      });
    });
  }

  getTotalPrice(productId) {
    cy.get(`#product-${productId}`).within(() => {
      this.totalPrice.then((total) => {
        cy.contains(total.text());
      });
    });
  }

  get btnRemoveFirst() {
    return cy.get('a[data-product-id="1"]');
  }

  get btnRemoveSecond() {
    return cy.get('a[data-product-id="2"]');
  }

  get registerLogin() {
    return cy.get('a[href="/login"]').contains("Register / Login");
  }

  get btnCheckout() {
    return cy.contains(".check_out", "Proceed To Checkout");
  }

  subscribe(email) {
    cy.contains(/Subscription/i).should("exist");
    this.inputSubscribe.scrollIntoView().clear().type(email);
    this.btnSubscribe.click();
    cy.get("#success-subscribe").should("be.visible");
  }

  getPrice(id) {
    cy.get(`#product-${id}`).contains(this.productPrice);
  }

  removeFirstProduct() {
    cy.contains("li", "Shopping Cart").should("be.visible");
    this.btnRemoveFirst.click();
  }

  removeSecondProduct() {
    cy.contains("li", "Shopping Cart").should("be.visible");
    this.btnRemoveSecond.click();
  }

  navRegisterLogin() {
    this.registerLogin.click();
  }

  checkout() {
    cy.get(".active").contains("Shopping Cart").should("be.visible");
    this.btnCheckout.click();
  }
}

export default Cart;
