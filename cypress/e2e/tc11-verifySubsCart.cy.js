/// <reference types="cypress" />

import MenuComponent from "./../component/menuComponent";
import PageComponent from "../component/pageComponent";

const menu = new MenuComponent();
const page = new PageComponent();

describe("Test Case 11: Verify Subscription in Cart page", () => {
    it("Veryfying Subscription", () => {
        cy.visit("/");
        menu.cart();
        page.subscribe('tescik@test.ts')
    });
});