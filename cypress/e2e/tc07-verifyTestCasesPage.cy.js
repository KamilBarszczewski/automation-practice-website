/// <reference types="cypress" />

describe("Test Case 7: Verify Test Cases Page", () => {
    it("Veryfying certain page", () => {
      cy.visit("/");
      cy.get('img[src="/static/images/home/logo.png"]').should("be.visible");
      cy.get('a[href="/test_cases"]').contains(" Test Cases").click();

      cy.contains('b', 'Test Cases').should('be.visible');
      cy.contains('h5', 'Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:').should('be.visible')
    });
});