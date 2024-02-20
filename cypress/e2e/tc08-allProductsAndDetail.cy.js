/// <reference types="cypress" />

import MenuComponent from "./../component/menuComponent";
import PageComponent from "../component/pageComponent";

const menu = new MenuComponent();
const page = new PageComponent();

describe("Test Case 8: Verify All Products and product detail page", () => {
    it("Veryfying products page", () => {
        cy.visit("/");
        menu.products();
        page.products.displayFirstProduct();
    });
});