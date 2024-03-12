/// <reference types="cypress" />

import CartPage from "../pages/cartPage.cy";
import CheckoutPage from "../pages/checkoutPage.cy";
import ContactUsPage from "../pages/contactUsPage.cy";
import PaymentPage from "../pages/paymentPage.cy";
import ProductPage from "../pages/productPage.cy";

class HubPage {
  productsPage = new ProductPage();
  paymentPage = new PaymentPage();
  checkoutPage = new CheckoutPage();
  cartPage = new CartPage();
  contactPage = new ContactUsPage();

  get inputSubscribe() {
    return cy.get("#susbscribe_email");
  }

  get btnSubscribe() {
    return cy.get("#subscribe");
  }

  get btnContinueShopping() {
    return cy.get('button[data-dismiss="modal"]').contains("Continue Shopping");
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

  get linkKids() {
    return cy.get('a[href="#Kids"]');
  }

  get linkDress() {
    return cy.get('a[href="/category_products/1"]').contains("Dress");
  }

  get linkTshirts() {
    return cy.get('a[href="/category_products/3"]').contains("Tshirts");
  }

  get linkPolo() {
    return cy.get('a[href="/brand_products/Polo"]').contains("Polo");
  }

  get linkHM() {
    return cy.get('a[href="/brand_products/H&M"]').contains("H&M");
  }

  clickCategoryWomen() {
    this.linkWomen.click();
  }

  clickCategoryMen() {
    this.linkMen.click();
  }

  clickCategoryKids() {
    this.categoryKids.click();
  }

  clickSubcategoryDress() {
    this.linkDress.click();
  }

  clickSubcategoryTshirts() {
    this.linkTshirts.click();
  }

  clickBrandPolo() {
    this.linkPolo.click();
    cy.contains("h2", "Brand - Polo Products");
  }

  clickBrandHM() {
    this.linkHM.click();
    cy.contains("h2", "Brand - H&M Products");
  }

  fillSubscribeForm(email) {
    cy.contains(/Subscription/i).should("exist");
    this.inputSubscribe.scrollIntoView().clear().type(email);
    this.btnSubscribe.click();
  }

  continueShoppingButton() {
    cy.contains("h4", "Added!").should("be.visible");
    this.btnContinueShopping.click();
  }

  viewCartLink() {
    cy.contains("u", "View Cart").should("be.visible");
    this.linkViewCart.click();
  }
}

export default HubPage;
