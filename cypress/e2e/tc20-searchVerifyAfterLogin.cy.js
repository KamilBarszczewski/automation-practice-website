/// <reference types="cypress" />

import PageComponent from "../component/pageComponent";
import MenuComponent from "../component/menuComponent";
import SignupLogin from "../pages/signupLogin.cy";

const page = new PageComponent();
const menu = new MenuComponent();
const signupLogin = new SignupLogin();

describe("Test Case 20: Search Products and Verify Cart After Login", () => {
  before("Registering user", () => {
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
    cy.location("pathname").should("include", "/login");
  });

  it("exploring Brand", () => {
    cy.visit("/");
    cy.location("pathname").should("equal", "/");
    menu.products();
    page.products.searchProduct("jeans");
    cy.addToCart(33);
    page.continueShopping();
    cy.addToCart(35);
    page.continueShopping();
    cy.addToCart(37);
    page.viewCart();

    page.cart.getProductName(33);
    page.cart.getProductName(35);
    page.cart.getProductName(37);

    menu.signupLogin();
    signupLogin.loginUser("tescik@test.ts", "testowy@");

    menu.cart();
    page.cart.getProductName(33);
    page.cart.getProductName(35);
    page.cart.getProductName(37);
  });

  after("Deleting user", () => {
    menu.deleteUser();
  });
});
