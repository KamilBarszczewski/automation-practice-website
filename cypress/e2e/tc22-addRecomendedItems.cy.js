/// <reference types="cypress" />

import PageComponent from "../component/pageComponent";
import MenuComponent from "../component/menuComponent";

const page = new PageComponent();
const menu = new MenuComponent();

describe("Test Case 22: Add to cart from Recommended items", () => {
  it("Adding to cart", () => {
    cy.visit("/");
    cy.location("pathname").should("equal", "/");
    cy.contains(/recommended items/i).should("exist");

    cy.get("#recommended-item-carousel").within(() => {
      cy.get('[data-slide="next"]').click();
      cy.get('[data-product-id="3"]').click();
    });

    page.viewCart();
    page.cart.getProductName(3);
  });
});
