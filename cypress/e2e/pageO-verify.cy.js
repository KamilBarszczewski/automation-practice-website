/// <reference types="cypress" />
import MenuComponent from "../component/menuComponent";
import LoginPage from "../pages/loginPage.cy";
import SubpagesHub from "../component/subpagesHub";

const menu = new MenuComponent();
const login = new LoginPage();
const hub = new SubpagesHub();

describe("verify pages", () => {
  before("register user", () => {
    cy.visit("/");
    cy.location("pathname").should("equal", "/");
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
  });

  beforeEach("", () => {
    cy.visit("/");
    cy.location("pathname").should("equal", "/");
  });

  it("TC 23: verify address details in checkout page", () => {
    cy.addToCart(3);
    hub.home.continueShopping();
    cy.addToCart(1);
    hub.home.viewCart();

    hub.cart.checkout();
    hub.checkout.verifyDeliveryAddress();
    hub.checkout.verifyInvoiceAddress();
  });

  it("TC 7: verify Test Cases page", () => {
    menu.testCases();
    cy.location("pathname").should("equal", "/test_cases");
    cy.contains(/Test Cases/i).should("exist");
  });

  it("TC 8: verify products page", () => {
    menu.products();
    cy.getProduct(1);
    cy.location("pathname").should("equal", "/product_details/1");
    hub.products.getProductDetails();
  });

  it("TC 10: verify Subscription in home page", () => {
    hub.home.subscribe("tescik@test.ts");
  });

  it("TC 11: veryfy subscription in cart page", () => {
    menu.cart();
    hub.cart.subscribe("tescik@test.ts");
  });

  after("delete user", () => {
    menu.signupLogin();
    login.loginUser("tescik@test.ts", "@testowy");
    menu.deleteUser();
  });
});
