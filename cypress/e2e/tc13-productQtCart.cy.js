/// <reference types="cypress" />

describe("Test Case 13: Verify Product quantity in Cart", () => {
  it("Veryfying product quantities", () => {
    cy.visit("/");
    cy.contains("h2", "Features Items").should("be.visible");
    cy.get('a[href="/product_details/3"]').contains("View Product").click();

    cy.get(".product-details").should("be.visible");
    cy.get("#quantity").clear().type("4");
    cy.get('button[type="button"]').click();

    cy.get('a[href="/view_cart"]').contains("View Cart").click();

    cy.contains("#product-3", "Sleeveless Dress", "Rs. 1000").should(
      "be.visible"
    );
    cy.contains("#product-3 > .cart_quantity", "4").should("be.visible");
    cy.contains("#product-3 > .cart_total", "Rs. 4000").should("be.visible");
  });
});
