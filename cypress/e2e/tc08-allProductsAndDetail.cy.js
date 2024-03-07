/// <reference types="cypress" />

import MenuComponent from "./../component/menuComponent";
import PageComponent from "../component/pageComponent";

const menu = new MenuComponent();
const page = new PageComponent();

describe("Test Case 8: Verify All Products and product detail page", () => {
  it("veryfy products page", () => {
    cy.visit("/");
    cy.location("pathname").should("equal", "/");

    menu.products();
    cy.getProduct(1);
    cy.location("pathname").should("equal", "/product_details/1");

    page.products.getProductDetails();
  });
});
