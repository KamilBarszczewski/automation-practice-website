/// <reference types="cypress" />

import PageComponent from "../component/pageComponent";
import MenuComponent from "../component/menuComponent";

const page = new PageComponent();
const menu = new MenuComponent();

describe("Test Case 19: View & Cart Brand Products", () => {
  it("exploring Brand", () => {
    cy.visit("/");
    menu.products();
    cy.contains("h2", "Brands").should("be.visible");
    page.brandPolo();
    page.brandHM();
  });
});