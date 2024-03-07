/// <reference types="cypress" />

import MenuComponent from "./../component/menuComponent";
import PageComponent from "../component/pageComponent";

const menu = new MenuComponent();
const page = new PageComponent();

describe("Test Case 9: Search Product", () => {
  it("Veryfy Search on Products page", () => {
    cy.visit("/");
    menu.products();
    page.products.searchProduct("dress");
  });
});
