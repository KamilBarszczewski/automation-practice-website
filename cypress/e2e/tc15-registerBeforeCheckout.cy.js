/// <reference types="cypress" />

import MenuComponent from "../component/menuComponent";
import SignupLogin from "../pages/signupLogin.cy";
import PageComponent from "../component/pageComponent";

const menu = new MenuComponent();
const signupLogin = new SignupLogin();
const page = new PageComponent();

describe("Test Case 15: Place Order: Register before Checkout", () => {
  it("register user then checkout", () => {
    cy.visit("/");
    cy.location("pathname").should("equal", "/");
    menu.signupLogin();

    // REGISTERING USER
    signupLogin.signupUser("Tescik", "tescik@test.ts");
    // ENTER ACCOUNT INFORMATION
    signupLogin.signup.createUser(
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

    cy.addToCart(5);
    page.continueShopping();
    cy.addToCart(8);
    page.viewCart();
    page.cart.checkout();
    page.checkout.placeOrder("test message");
    page.payment.confirmPayment(
      "Testeusz Testeuszewicz",
      "123456789",
      "123",
      "123",
      "2025"
    );

    page.payment.continueButton();
  });

  after("Deleting user", () => {
    menu.deleteUser();
  });
});
