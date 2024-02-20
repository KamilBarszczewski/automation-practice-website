/// <reference types="cypress" />

import MenuComponent from "./../component/menuComponent";
import Products from "../pages/products.cy";
import PageComponent from "../component/pageComponent";

const menu = new MenuComponent();
const products = new Products();
const pages = new PageComponent();

describe("Test Case 12: Add Products in Cart", () => {
    it("Adding products in Cart PAge", () => {
        cy.visit("/");
        menu.products();

        products.getFirstProduct();
        pages.continueShopping();
        products.getSecondProduct();
        pages.viewCart();

        cy.contains('#product-1', 'Blue Top', 'Rs. 500', ).should('be.visible');
        cy.contains('#product-1 > .cart_quantity', '1').should('be.visible');
        cy.contains('#product-1 > .cart_total', 'Rs. 500').should('be.visible');

        cy.contains('#product-2', 'Men Tshirt', 'Rs. 400', ).should('be.visible');
        cy.contains('#product-2 > .cart_quantity', '1').should('be.visible');
        cy.contains('#product-2 > .cart_total', 'Rs. 400').should('be.visible');
    });
});