/// <reference types="cypress" />

import MenuComponent from "../component/menuComponent";
import LoginPage from "../pages/loginPage.cy";
import HubPage from "../pages/hubPage.cy";

const menu = new MenuComponent();
const loginPage = new LoginPage();
const hub = new HubPage();

describe("verify pages", () => {
  before("register user", () => {
    cy.visit("/");
    cy.location("pathname").should("equal", "/");
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
  });

  beforeEach("", () => {
    cy.visit("/");
    cy.location("pathname").should("equal", "/");
  });

  it("TC 23: verify address details in checkout page", () => {
    cy.contains("a", " Logged in as Tescik").should("exist");
    cy.addProductToCartById(3);
    hub.continueShoppingButton();
    cy.addProductToCartById(1);
    hub.viewCartLink();

    hub.cartPage.proceedToCheckoutButton();
    hub.checkoutPage.verifyDeliveryAddress();
    hub.checkoutPage.verifyInvoiceAddress();
  });

  it("TC 6: fill form on Contact Us page", () => {
    menu.openContactUsTab();
    cy.contains(/get in touch/i).should("exist");
    hub.contactPage.fillContactForm(
      "Testeusz Testowy",
      "tescik@test.ts",
      "Temat testowy",
      "Wiadomosc testowa",
      "cypress/fixtures/faun.webp"
    );
    cy.contains(
      /Success! Your details have been submitted successfully./i
    ).should("exist");

    hub.contactPage.homePageButton();
    cy.location("pathname").should("equal", "/");
  });

  it("TC 7: verify Test Cases page", () => {
    menu.openTestCasesPage();
    cy.location("pathname").should("equal", "/test_cases");
  });

  it("TC 8: verify products page", () => {
    menu.openProductsTab();
    cy.location("pathname").should("equal", "/products");
    cy.contains(/All Products/i).should("exist");
    cy.goToProductDetails(1);
    cy.location("pathname").should("equal", "/product_details/1");
    hub.productsPage.verifyProductDetails();
  });

  it("TC 10: verify Subscription in home page", () => {
    hub.fillSubscribeForm("tescik@test.ts");
    cy.get("#success-subscribe").should("be.visible");
  });

  it("TC 11: veryfy subscription in cart page", () => {
    menu.openCartTab();
    hub.fillSubscribeForm("tescik@test.ts");
    cy.get("#success-subscribe").should("be.visible");
  });

  it("TC 25: verify scroll up using Arrow and scroll down functionality", () => {
    cy.contains("h2", "Subscription").scrollIntoView();
    cy.wait(2000);
    cy.get("#scrollUp").scrollIntoView().click();
    cy.contains(
      /Full-Fledged practice website for Automation Engineers/i
    ).should("be.visible");
  });

  it("TC 26: verify scroll up and scroll down functionality", () => {
    cy.contains("h2", "Subscription").scrollIntoView();
    cy.wait(2000);
    cy.contains(/Full-Fledged practice website for Automation Engineers/i)
      .should("be.visible")
      .scrollIntoView();
  });

  after("delete user", () => {
    menu.openLoginTab();
    loginPage.loginUser("tescik@test.ts", "testowy@");

    cy.contains("a", " Logged in as Tescik").should("exist");
    menu.deleteUserTab();
  });
});
