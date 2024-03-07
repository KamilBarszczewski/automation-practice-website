/// <reference types="cypress" />
import MenuComponent from "../component/menuComponent";
import LoginPage from "../pages/loginPage.cy";
import SubpagesHub from "../component/subpagesHub";

const menu = new MenuComponent();
const login = new LoginPage();
const hub = new SubpagesHub();

describe("interaction with products", () => {
  before("Registering user", () => {
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

    menu.logoutUser();
    cy.location("pathname").should("include", "/login");
  });

  beforeEach("", () => {
    cy.visit("/");
    cy.location("pathname").should("equal", "/");
  });

  it("TC 9: veryfy Search on Products page", () => {
    menu.products();
    hub.products.searchProduct("dress");
  });

  it("TC 12: add products to cart", () => {
    menu.products();
    cy.addToCart(1);
    hub.home.continueShopping();
    cy.addToCart(2);
    hub.home.viewCart();

    hub.cart.getProductPrice(1);
    hub.cart.getProductQuantity(1);
    hub.cart.getTotalPrice(1);

    hub.cart.getProductPrice(2);
    hub.cart.getProductQuantity(2);
    hub.cart.getTotalPrice(2);
  });

  it("TC 13: veryfying product quantities", () => {
    cy.getProduct(3);
    cy.location("pathname").should("equal", "/product_details/3");
    cy.get("#quantity").clear().type("4");
    hub.products.buttonAddToCart();
    hub.home.viewCart();
    hub.cart.getProductQuantity(3);
  });

  it("TC 17: remove products", () => {
    cy.addToCart(3);
    hub.home.continueShopping();
    cy.addToCart(6);
    hub.home.viewCart();
    hub.cart.removeProduct(3);
    hub.cart.removeProduct(6);
    cy.contains("b", "Cart is empty!");
  });

  it("TC 18: exploring products' category", () => {
    hub.home.categoryWomen();
    hub.home.subcategoryDress();
    hub.home.categoryMen();
    hub.home.subcategoryTshirts();
  });

  it("TC 19: exploring products' brand", () => {
    menu.products();
    cy.contains("h2", "Brands").should("exist");
    hub.home.brandPolo();
    hub.home.brandHM();
  });

  it("TC 20: searchproducts and verify after login", () => {
    menu.products();
    hub.products.searchProduct("jeans");
    cy.addToCart(33);
    hub.home.continueShopping();
    cy.addToCart(35);
    hub.home.continueShopping();
    cy.addToCart(37);
    hub.home.viewCart();

    hub.cart.getProductName(33);
    hub.cart.getProductName(35);
    hub.cart.getProductName(37);

    menu.signupLogin();
    login.loginUser("tescik@test.ts", "testowy@");

    menu.cart();
    hub.cart.getProductName(33);
    hub.cart.getProductName(35);
    hub.cart.getProductName(37);
  });

  it("TC 21: add review", () => {
    menu.products();
    cy.getProduct(3);
    hub.products.writeReview("Tescik", "tescik@test.ts", "test message");
  });

  it("TC 22: recommended items", () => {
    cy.contains(/recommended items/i).should("exist");
    cy.get("#recommended-item-carousel").within(() => {
      cy.get('[data-slide="next"]').click();
      cy.get('[data-product-id="3"]').click();
    });

    hub.home.viewCart();
    hub.cart.getProductName(3);
  });

  after("Deleting user", () => {
    menu.signupLogin();
    login.loginUser("tescik@test.ts", "testowy@");
    menu.deleteUser();
  });
});
