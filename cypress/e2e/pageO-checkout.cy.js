/// <reference types="cypress" />
import MenuComponent from "../component/menuComponent";
import SubpagesHub from "../component/subpagesHub";
import LoginPage from "../pages/loginPage.cy";
import HomePage from "../pages/homePage.cy";

const menu = new MenuComponent();
const home = new HomePage();
const hub = new SubpagesHub();
const login = new LoginPage();

describe("interaction with checkout", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.location("pathname").should("equal", "/");
  });

  it("TC 14: register user after adding product to cart", () => {
    cy.addToCart(3);
    hub.home.viewCart();
    hub.cart.checkout();
    cy.getSubpage("login").contains("Register / Login").click();
    login.signupUser("Tescik", "tescik@test.ts");
    login.signup.createUser(
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
    hub.cart.checkout();
    hub.checkout.placeOrder("test message");
    hub.payment.confirmPayment(
      "Testeusz Testeuszewicz",
      "123456789",
      "123",
      "123",
      "2025"
    );

    hub.payment.continueButton();
  });

  it("TC 15: register user then make checkout", () => {
    menu.signupLogin();
    login.signupUser("Tescik", "tescik@test.ts");
    login.signup.createUser(
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
    hub.home.continueShopping();
    cy.addToCart(8);
    hub.home.viewCart();
    hub.cart.checkout();
    hub.checkout.placeOrder("test message");
    hub.payment.confirmPayment(
      "Testeusz Testeuszewicz",
      "123456789",
      "123",
      "123",
      "2025"
    );

    hub.payment.continueButton();
  });

  it("TC 16: login user then checkout", () => {
    menu.signupLogin();
    login.signupUser("Tescik", "tescik@test.ts");
    login.signup.createUser(
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

    menu.signupLogin();
    login.loginUser("tescik@test.ts", "testowy@");

    cy.addToCart(3);
    hub.home.continueShopping();
    cy.addToCart(6);
    hub.home.viewCart();
    hub.cart.checkout();
    hub.checkout.placeOrder("test message");
    hub.payment.confirmPayment(
      "Testeusz Testeuszewicz",
      "123456789",
      "123",
      "123",
      "2025"
    );

    hub.payment.continueButton();
  });

  afterEach("delete user", () => {
    menu.deleteUser();
  });
});
