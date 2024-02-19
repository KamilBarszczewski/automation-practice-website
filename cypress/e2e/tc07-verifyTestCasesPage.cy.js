/// <reference types="cypress" />

import MenuComponent from "./../component/menuComponent";

const menu = new MenuComponent();

describe("Test Case 7: Verify Test Cases Page", () => {
    it("Veryfying certain page", () => {
      cy.visit("/");
      menu.testCases();

      cy.contains('b', 'Test Cases').should('be.visible');
      cy.contains(
        'h5', 
        'Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:'
        ).should('be.visible')
    });
});