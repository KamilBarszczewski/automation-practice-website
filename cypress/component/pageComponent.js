/// <reference types="cypress" />

import Cart from "../pages/cart.cy";
import Checkout from "../pages/checkout.cy";
import ContactUs from "../pages/contactUs.cy";
import Payment from "../pages/payment.cy";
import Products from "../pages/products.cy";

class PageComponent {


    products = new Products();
    payment = new Payment();
    checkout = new Checkout();
    cart = new Cart();
    contactUs = new ContactUs();

    get inputSearch() {
        return cy.get('#search_product');
    }

    get inputSubscribe() {
        return cy.get('#susbscribe_email');
    }

    get btnSearch() {
        return cy.get('#submit_search');
    }

    get btnSubscribe() {
        return cy.get('#subscribe');
    }

    get btnContinueShopping() {
        return cy.get('button[data-dismiss="modal"]')
        .contains("Continue Shopping");
    }

    get linkViewCart() {
        return cy.get('a[href="/view_cart"] > u');
    }

    get linkWomen() {
        return cy.get('a[href="#Women"]');
    }

    get linkMen() {
        return cy.get('a[href="#Men"]');
    }

    get linkDress() {
        return cy.get('a[href="/category_products/1"]').contains('Dress');
    }

    get linkTshirts() {
        return cy.get('a[href="/category_products/3"]').contains('Tshirts');
    }

    get linkPolo() {
        return cy.get('a[href="/brand_products/Polo"]').contains('Polo');
    }

    get linkHM() {
        return cy.get('a[href="/brand_products/H&M"]').contains('H&M');
    }

    continueShopping() {
        cy.contains('h4', 'Added!').should('be.visible');
        this.btnContinueShopping.click();
    }
    
    searchProduct(productName) {
        cy.contains('h2', 'All Products').should('be.visible');
        this.inputSearch.clear().type(productName);
        this.btnSearch.click();
        cy.contains('h2', 'Searched Products').should('be.visible');
    }

    subscribe(email) {
        cy.contains('h2', 'Subscription').should('be.visible');
        this.inputSubscribe.scrollIntoView().clear().type(email);
        this.btnSubscribe.click();
        cy.get('#success-subscribe').should('be.visible');
    }

    viewCart() {
        cy.contains('u', 'View Cart').should('be.visible');
        this.linkViewCart.click();
    }

    categoryWomen() {
        this.linkWomen.click();
    }

    categoryMen() {
        this.linkMen.click();
    }

    subcategoryDress() {
        this.linkDress.click();
        cy.contains('h2', 'Women - Dress Products');
    }

    subcategoryTshirts() {
        this.linkTshirts.click();
        cy.contains('h2', 'Men - Tshirts Products');
    }

    brandPolo() {
        this.linkPolo.click();
        cy.contains('h2', 'Brand - Polo Products');
    }

    brandHM() {
        this.linkHM.click();
        cy.contains('h2', 'Brand - H&M Products');
    }
}

export default PageComponent;