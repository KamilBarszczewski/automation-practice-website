/// <reference types="cypress" />

import MenuComponent from "../component/menuComponent";
import HubPage from "../pages/hubPage.cy";
import LoginPage from "../pages/loginPage.cy";

const menu = new MenuComponent();
const hub = new HubPage();
const loginPage = new LoginPage();

describe("interaction with checkout", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.location("pathname").should("equal", "/");
  });

  it("TC 14: register user after adding product to cart", () => {
    cy.addProductToCartById(3);
    hub.viewCartLink();
    cy.location("pathname").should("equal", "/view_cart");
    hub.cartPage.proceedToCheckoutButton();
    cy.linkToPage("login").contains("Register / Login").click();
    loginPage.signupUser("Tescik", "tescik@test.ts");
    loginPage.signupPage.createUser(
      "Tescik",
      "testowy@",
      "30",
      "10",
      "1955",
      "Testeusz",
      "Testeuszewicz",
      "Test-Soft",
      "Testowa 11",
      "Testowa 21",
      "United States",
      "Nevada",
      "Testowo Testowe",
      "555333111",
      "0021455535299"
    );

    menu.openCartTab();
    cy.location("pathname").should("equal", "/view_cart");
    hub.cartPage.proceedToCheckoutButton();
    hub.checkoutPage.fillPlaceOrderForm("test message");
    hub.paymentPage.fillPaymentForm(
      "Testeusz Testeuszewicz",
      "123456789",
      "123",
      "123",
      "2025"
    );

    cy.contains("p", "Congratulations! Your order has been confirmed!").should(
      "be.visible"
    );
    hub.paymentPage.continueButton();
  });

  it("TC 15: register user then make checkout", () => {
    menu.openLoginTab();
    loginPage.signupUser("Tescik", "tescik@test.ts");
    loginPage.signupPage.createUser(
      "Tescik",
      "testowy@",
      "30",
      "10",
      "1955",
      "Testeusz",
      "Testeuszewicz",
      "Test-Soft",
      "Testowa 11",
      "Testowa 21",
      "United States",
      "Nevada",
      "Testowo Testowe",
      "555333111",
      "0021455535299"
    );

    cy.addProductToCartById(5);
    hub.continueShoppingButton();
    cy.addProductToCartById(8);
    hub.viewCartLink();
    cy.location("pathname").should("equal", "/view_cart");
    hub.cartPage.proceedToCheckoutButton();
    hub.checkoutPage.fillPlaceOrderForm("test message");
    hub.paymentPage.fillPaymentForm(
      "Testeusz Testeuszewicz",
      "123456789",
      "123",
      "123",
      "2025"
    );

    cy.contains("p", "Congratulations! Your order has been confirmed!").should(
      "be.visible"
    );
    hub.paymentPage.continueButton();
  });

  it("TC 16: login user then checkout", () => {
    menu.logoutUserTab();
    loginPage.signupUser("Tescik", "tescik@test.ts");
    loginPage.signupPage.createUser(
      "Tescik",
      "testowy@",
      "30",
      "10",
      "1955",
      "Testeusz",
      "Testeuszewicz",
      "Test-Soft",
      "Testowa 11",
      "Testowa 21",
      "United States",
      "Nevada",
      "Testowo Testowe",
      "555333111",
      "0021455535299"
    );

    menu.logoutUserTab();

    menu.logoutUserTab();
    loginPage.loginUser("tescik@test.ts", "testowy@");

    cy.addProductToCartById(3);
    hub.continueShoppingButton();
    cy.addProductToCartById(6);
    hub.viewCartLink();
    cy.location("pathname").should("equal", "/view_cart");
    hub.cartPage.proceedToCheckoutButton();
    hub.checkoutPage.fillPlaceOrderForm("test message");
    hub.paymentPage.fillPaymentForm(
      "Testeusz Testeuszewicz",
      "123456789",
      "123",
      "123",
      "2025"
    );

    cy.contains("p", "Congratulations! Your order has been confirmed!").should(
      "be.visible"
    );

    hub.paymentPage.continueButton();
  });

  it("TC 24: download invoice after purchase order", () => {
    cy.task("deleteDownloads");

    cy.addProductToCartById(3);
    hub.continueShoppingButton();
    cy.addProductToCartById(4);
    hub.viewCartLink();
    hub.cartPage.proceedToCheckoutButton();
    cy.linkToPage("login").contains("Register / Login").click();
    loginPage.signupUser("Tescik", "tescik@test.ts");
    loginPage.signupPage.createUser(
      "Tescik",
      "testowy@",
      "30",
      "10",
      "1955",
      "Testeusz",
      "Testeuszewicz",
      "Test-Soft",
      "Testowa 11",
      "Testowa 21",
      "United States",
      "Nevada",
      "Testowo Testowe",
      "555333111",
      "0021455535299"
    );

    menu.openCartTab();
    hub.cartPage.proceedToCheckoutButton();
    hub.checkoutPage.verifyDeliveryAddress();
    hub.checkoutPage.verifyInvoiceAddress();
    hub.checkoutPage.verifyYourOrder(3);
    hub.checkoutPage.verifyYourOrder(4);
    // nic mi nie daje
    hub.checkoutPage.verifyTotalPrice();

    hub.checkoutPage.fillPlaceOrderForm("test message");
    hub.paymentPage.fillPaymentForm(
      "Testeusz Testeuszewicz",
      "123456789",
      "123",
      "123",
      "2025"
    );

    hub.paymentPage.downloadInvoiceButton();
    cy.readFile("cypress/downloads/invoice.txt").should(
      "equal",
      "Hi Testeusz Testeuszewicz, Your total purchase amount is 2500. Thank you"
    );

    hub.paymentPage.continueButton();
  });

  afterEach("delete user", () => {
    cy.contains("a", " Logged in as Tescik").should("exist");
    menu.deleteUserTab();
  });
});
