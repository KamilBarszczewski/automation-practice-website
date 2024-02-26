/// <reference types="cypress" />

import PageComponent from "../component/pageComponent";

const page = new PageComponent();

describe("Test Case 18: View Category Products", () => {
  it("exploring Category", () => {
    cy.visit("/");
    cy.location("pathname").should("equal", "/");

    page.categoryWomen();
    page.subcategoryDress();

    page.categoryMen();
    page.subcategoryTshirts();
  });
});
