/// <reference types="cypress" />
import PageComponent from "../component/pageComponent";

const page = new PageComponent();

describe("Test Case 13: Verify Product quantity in Cart", () => {
  it("Veryfying product quantities", () => {
    cy.visit("/");
    cy.location("pathname").should("equal", "/");

    cy.getProduct(3);
    cy.location("pathname").should("equal", "/product_details/3");
    cy.get("#quantity").clear().type("4");
    page.products.buttonAddToCart();
    page.viewCart();
    page.cart.getProductQuantity(3);
  });
});
