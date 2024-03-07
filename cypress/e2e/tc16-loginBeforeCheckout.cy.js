/// <reference types="cypress" />

import PageComponent from "../component/pageComponent";
import MenuComponent from "../component/menuComponent";
import SignupLogin from "../pages/signupLogin.cy";

const page = new PageComponent();
const menu = new MenuComponent();
const signupLogin = new SignupLogin();

describe("Test Case 16: Place Order: Login before Checkout", () => {
  before("Register user", () => {
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

    menu.logoutUser();
  });

  it("Login user then checkout", () => {
    cy.visit("/");
    cy.location("pathname").should("equal", "/");
    menu.signupLogin();
    signupLogin.loginUser("tescik@test.ts", "testowy@");

    cy.addToCart(3);
    page.continueShopping();
    cy.addToCart(6);
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
