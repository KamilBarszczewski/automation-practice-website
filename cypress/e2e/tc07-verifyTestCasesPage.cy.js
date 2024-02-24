/// <reference types="cypress" />

import MenuComponent from "./../component/menuComponent";

const menu = new MenuComponent();

describe("Test Case 7: Verify Test Cases Page", () => {
  it("verify Test Cases page", () => {
    cy.visit("/");
    menu.testCases();

    cy.location("pathname").should("equal", "/test_cases");
    cy.contains(/Test Cases/i).should("exist");
  });
});
