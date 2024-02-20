/// <reference types="cypress" />

import PageComponent from "../component/pageComponent";

const page = new PageComponent();

describe("Test Case 17: Remove Products From Cart", () => {
  it("removing products", () => {
    cy.visit("/");
    cy.contains("h2", "Features Items").should("be.visible");

    page.products.getFirstProduct();
    page.continueShopping();
    page.products.getSecondProduct();
    page.viewCart();
    page.cart.removeFirstProduct();
    page.cart.removeSecondProduct();
    cy.contains('b', 'Cart is empty!')
  });
});