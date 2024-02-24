/// <reference types="cypress" />

import PageComponent from "../component/pageComponent";

const page = new PageComponent();

describe("Test Case 10: Verify Subscription in home page", () => {
  it("Veryfying Subscription", () => {
    cy.visit("/");
    cy.location("pathname").should("equal", "/");
    page.subscribe("tescik@test.ts");
  });
});
