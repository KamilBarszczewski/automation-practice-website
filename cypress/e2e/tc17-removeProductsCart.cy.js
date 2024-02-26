/// <reference types="cypress" />

import PageComponent from "../component/pageComponent";

const page = new PageComponent();

describe("Test Case 17: Remove Products From Cart", () => {
  it("removing products", () => {
    cy.visit("/");
    cy.location("pathname").should("equal", "/");

    cy.addToCart(3);
    page.continueShopping();
    cy.addToCart(6);
    page.viewCart();
    page.cart.removeProduct(3);
    page.cart.removeProduct(6);
    cy.contains("b", "Cart is empty!");
  });
});
