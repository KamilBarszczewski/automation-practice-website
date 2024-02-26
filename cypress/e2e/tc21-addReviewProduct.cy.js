/// <reference types="cypress" />

import PageComponent from "../component/pageComponent";
import MenuComponent from "../component/menuComponent";

const page = new PageComponent();
const menu = new MenuComponent();

describe("Test Case 21: Add review on product", () => {
  it("Adding review", () => {
    cy.visit("/");
    menu.products();
    page.products.getDetailProduct1();
    page.products.writeReview('Tescik', 'tescik@test.ts', 'test message');
  });
});