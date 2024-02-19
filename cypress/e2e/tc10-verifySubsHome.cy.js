/// <reference types="cypress" />

import PageComponent from "../component/pageComponent";

const page = new PageComponent();

describe("Test Case 10: Verify Subscription in home page", () => {
    it("Veryfying Subscription", () => {
        cy.visit("/");
        cy.contains("h2", "Features Items").should("be.visible");
        page.subscribe('tescik@test.ts');
    });
});