/// <reference types="cypress" />

import MenuComponent from "./../component/menuComponent";
import PageComponent from "../component/pageComponent";

const menu = new MenuComponent();
const page = new PageComponent();

describe("Test Case 12: Add Products in Cart", () => {
    it("Adding products in Cart PAge", () => {
        cy.visit("/");
        menu.products();

        page.products.getFirstProduct();
        page.continueShopping();
        page.products.getSecondProduct();
        page.viewCart();

        cy.contains('#product-1', 'Blue Top', 'Rs. 500', ).should('be.visible');
        cy.contains('#product-1 > .cart_quantity', '1').should('be.visible');
        cy.contains('#product-1 > .cart_total', 'Rs. 500').should('be.visible');

        cy.contains('#product-2', 'Men Tshirt', 'Rs. 400', ).should('be.visible');
        cy.contains('#product-2 > .cart_quantity', '1').should('be.visible');
        cy.contains('#product-2 > .cart_total', 'Rs. 400').should('be.visible');
    });
});