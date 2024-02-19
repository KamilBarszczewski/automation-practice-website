/// <reference types="cypress" />

import MenuComponent from "./../component/menuComponent";
import PageComponent from "../component/pageComponent";

const menu = new MenuComponent();
const page = new PageComponent();

describe("Test Case 12: Add Products in Cart", () => {
    it("Adding products in Cart PAge", () => {
        cy.visit("/");
        menu.products();
        
        cy.get('.single-products').contains('Blue Top').trigger('mouseover')
        cy.get('a[data-product-id="1"]').contains('Add to cart').invoke('show').click();
        
        cy.get('button[data-dismiss="modal"]').contains('Continue Shopping').click()

        cy.get('a[data-product-id="2"]').contains('Add to cart').invoke('show').click();
        cy.get('a[href="/view_cart"]').contains('View Cart').click();

        cy.contains('#product-1', 'Blue Top', 'Rs. 500', ).should('be.visible');
        cy.contains('#product-1 > .cart_quantity', '1').should('be.visible');
        cy.contains('#product-1 > .cart_total', 'Rs. 500').should('be.visible');

        cy.contains('#product-2', 'Men Tshirt', 'Rs. 400', ).should('be.visible');
        cy.contains('#product-2 > .cart_quantity', '1').should('be.visible');
        cy.contains('#product-2 > .cart_total', 'Rs. 400').should('be.visible');
    });
});