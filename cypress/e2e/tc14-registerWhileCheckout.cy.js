/// <reference types="cypress" />

import MenuComponent from "../component/menuComponent";
import PageComponent from "../component/pageComponent";
import SignupLogin from "../pages/loginPage";

const menu = new MenuComponent();
const page = new PageComponent();
const signupLogin = new SignupLogin();

describe("Test Case 14: Place Order: Register while Checkout", () => {
  it("Veryfying product quantities", () => {
    cy.visit("/");
    cy.location("pathname").should("equal", "/");
    cy.addToCart(3);
    page.viewCart();
    page.cart.checkout();
    cy.getSubpage("login").contains("Register / Login").click();

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

    menu.cart();
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
