/// <reference types="cypress" />

class CartPage {
  get productPrice() {
    return cy.get('td[class="cart_price"] > p');
  }

  get productQuantity() {
    return cy.get('button[class="disabled"]');
  }

  get totalPrice() {
    return cy.get('p[class="cart_total_price"]');
  }

  get btnCheckout() {
    return cy.contains(".check_out", "Proceed To Checkout");
  }

  verifyProductNameById(productId) {
    cy.get(`[href="/product_details/${productId}"]`).then((name) => {
      cy.contains(name.text()).should("exist");
    });
  }

  verifyProductPriceById(productId) {
    cy.get(`#product-${productId}`).within(() => {
      this.productPrice.then((price) => {
        cy.contains(price.text()).should("exist");
      });
    });
  }

  verifyProductQuantity(productId) {
    cy.get(`#product-${productId}`).within(() => {
      this.productQuantity.then((quantity) => {
        cy.contains(quantity.text()).should("exist");
      });
    });
  }

  verifyTotalPrice(productId) {
    cy.get(`#product-${productId}`).within(() => {
      this.totalPrice.then((total) => {
        cy.contains(total.text()).should("exist");
      });
    });
  }

  removeProduct(productNumber) {
    cy.get(`a[data-product-id=${productNumber}]`).click();
  }

  proceedToCheckoutButton() {
    cy.contains("Shopping Cart").should("exist");
    this.btnCheckout.click();
  }
}

export default CartPage;
