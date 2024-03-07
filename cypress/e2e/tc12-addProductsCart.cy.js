/// <reference types="cypress" />

import MenuComponent from "./../component/menuComponent";
import PageComponent from "../component/pageComponent";

const menu = new MenuComponent();
const page = new PageComponent();

describe("Test Case 12: Add Products in Cart", () => {
  it("Add products to Cart", () => {
    cy.visit("/");
    cy.location("pathname").should("equal", "/");

    menu.products();
    cy.addToCart(1);
    page.continueShopping();
    cy.addToCart(2);
    page.viewCart();

    page.cart.getProductPrice(1);
    page.cart.getProductQuantity(1);
    page.cart.getTotalPrice(1);

    page.cart.getProductPrice(2);
    page.cart.getProductQuantity(2);
    page.cart.getTotalPrice(2);
  });
});
