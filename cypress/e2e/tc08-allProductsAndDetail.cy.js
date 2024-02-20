/// <reference types="cypress" />

import MenuComponent from "./../component/menuComponent";
import Products from "../pages/products.cy";

const menu = new MenuComponent();
const products = new Products();

describe("Test Case 8: Verify All Products and product detail page", () => {
    it("Veryfying products page", () => {
        cy.visit("/");
        menu.products();
        products.displayFirstProduct();
    });
});