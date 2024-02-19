/// <reference types="cypress" />

import MenuComponent from "./../component/menuComponent";
import PageComponent from "../component/pageComponent";

const menu = new MenuComponent();
const page = new PageComponent();

describe("Test Case 9: Search Product", () => {
    it("Veryfying Search on Products page", () => {
        cy.visit("/");
        menu.products();
        page.searchProduct('dress')
    });
});