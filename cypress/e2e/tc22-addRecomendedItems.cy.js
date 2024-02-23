/// <reference types="cypress" />

import PageComponent from "../component/pageComponent";
import MenuComponent from "../component/menuComponent";

const page = new PageComponent();
const menu = new MenuComponent();

describe("Test Case 22: Add to cart from Recommended items", () => {
  it("Adding to cart", () => {
    cy.visit("/");
    cy.contains('h2', 'recommended items').scrollIntoView().should('be.visible')
    cy.get('.recommended-item-carousel').contains('[data-product-id="4"]').click();

       
    
  });
});