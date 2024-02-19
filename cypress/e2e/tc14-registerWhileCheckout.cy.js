/// <reference types="cypress" />

import MenuComponent from "../component/menuComponent";
import Cart from "../pages/cart.cy";
import SignupLogin from "../pages/signupLogin.cy";
import Signup from "../pages/signup.cy";
import Checkout from "../pages/checkout.cy";
import Payment from "../pages/payment.cy";

const menu = new MenuComponent();
const cart = new Cart();
const signupLogin = new SignupLogin();
const signup = new Signup();
const checkout = new Checkout();
const payment = new Payment();

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

    cart.checkout();
    cart.navRegisterLogin();
    // REGISTERING USER
    signupLogin.signupUser('Tescik', 'tescik@test.ts');
    // ENTER ACCOUNT INFORMATION
    signup.enterAccInfo("testowy@", "30", "10", "1955");
    signup.addressInfo(
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
    cart.checkout();
    checkout.placeOrder('Test message');
    payment.confirmPayment(
      'Testeusz Testeuszewicz', '123456789', '123', '123', '2025'
    );

    // DELETE USER
    menu.deleteAccount();
  });
});
