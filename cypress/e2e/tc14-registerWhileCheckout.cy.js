/// <reference types="cypress" />

import MenuComponent from "../component/menuComponent";
import PageComponent from "../component/pageComponent";
import SignupLogin from "../pages/signupLogin.cy";

const menu = new MenuComponent();
const page = new PageComponent();
const signupLogin = new SignupLogin();

describe("Test Case 14: Place Order: Register while Checkout", () => {
  it("Veryfying product quantities", () => {
    cy.visit("/");
    cy.contains("h2", "Features Items").should("be.visible");
    cy.get('a[data-product-id="3"]')
      .contains("Add to cart")
      .invoke("show")
      .click();
    cy.get('button[data-dismiss="modal"]')
      .contains("Continue Shopping")
      .click();
    cy.get('a[href="/view_cart"]').contains(" Cart").click({ force: true });

    page.cart.checkout();
    page.cart.navRegisterLogin();
    // REGISTERING USER
    signupLogin.signupUser('Tescik', 'tescik@test.ts');
    // ENTER ACCOUNT INFORMATION
    signupLogin.signup.enterAccInfo("testowy@", "30", "10", "1955");
    signupLogin.signup.addressInfo(
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

    menu.cart();
    page.cart.checkout();
    page.checkout.placeOrder('Test message');
    page.payment.confirmPayment(
      'Testeusz Testeuszewicz', '123456789', '123', '123', '2025'
    );

    // DELETE USER
    menu.deleteAccount();
  });
});
