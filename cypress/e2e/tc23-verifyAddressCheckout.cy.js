/// <reference types="cypress" />

import PageComponent from "../component/pageComponent";
import MenuComponent from "../component/menuComponent";
import SignupLogin from "../pages/signupLogin.cy";

const page = new PageComponent();
const menu = new MenuComponent();
const signupLogin = new SignupLogin();

describe("Test Case 23: Verify address details in checkout page", () => {
  it("Adding to cart", () => {
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

    cy.addToCart(3);
    page.continueShopping();
    cy.addToCart(1);
    page.viewCart();

    page.cart.checkout();
    // TODO: finish TC23 requirements
  });
});
