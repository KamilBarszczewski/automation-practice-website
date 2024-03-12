/// <reference types="cypress" />
import MenuComponent from "../component/menuComponent";
import LoginPage from "../pages/loginPage.cy";
import HubPage from "../pages/hubPage.cy";

const menu = new MenuComponent();
const loginPage = new LoginPage();
const hub = new HubPage();

describe("interaction with products", () => {
  before("Registering user", () => {
    cy.visit("/");
    cy.location("pathname").should("equal", "/");
    menu.openLoginTab();
    loginPage.signupUser("Tescik", "tescik@test.ts");
    loginPage.signupPage.createUser(
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

    menu.logoutUserTab();
    cy.location("pathname").should("include", "/login");
  });

  beforeEach("", () => {
    cy.visit("/");
    cy.location("pathname").should("equal", "/");
  });

  it("TC 9: veryfy Search on Products page", () => {
    menu.openProductsTab();
    cy.contains("h2", "All Products").should("exist");
    hub.productsPage.searchProduct("dress");
    cy.contains("h2", "Searched Products").should("exist");
  });

  it("TC 12: add products to cart", () => {
    menu.openProductsTab();
    cy.addProductToCartById(1);
    hub.continueShoppingButton();
    cy.addProductToCartById(2);
    hub.viewCartLink();

    hub.cartPage.verifyProductNameById(1);
    hub.cartPage.verifyProductPriceById(1);
    hub.cartPage.verifyProductQuantity(1);
    hub.cartPage.verifyTotalPrice(1);

    hub.cartPage.verifyProductNameById(2);
    hub.cartPage.verifyProductPriceById(2);
    hub.cartPage.verifyProductQuantity(2);
    hub.cartPage.verifyTotalPrice(2);
  });

  it("TC 13: veryfying product quantities", () => {
    cy.goToProductDetails(3);
    cy.location("pathname").should("equal", "/product_details/3");
    cy.get("#quantity").clear().type("4");
    hub.productsPage.addToCartButton();
    hub.viewCartLink();
    hub.cartPage.verifyProductNameById(3);
    hub.cartPage.verifyProductQuantity(3);
  });

  it("TC 17: remove products", () => {
    cy.addProductToCartById(3);
    hub.continueShoppingButton();
    cy.addProductToCartById(6);
    hub.viewCartLink();
    hub.cartPage.removeProduct(3);
    hub.cartPage.removeProduct(6);
    cy.contains("b", "Cart is empty!").should("exist");
  });

  it("TC 18: exploring products' category", () => {
    hub.clickCategoryWomen();
    hub.clickSubcategoryDress();
    // Która asercja jest bardziej prawilna, exist czy be.visible ??
    cy.contains("h2", "Women - Dress Products").should("exist");

    hub.clickCategoryMen();
    hub.clickSubcategoryTshirts();
    cy.contains("h2", "Men - Tshirts Products").should("be.visible");
  });

  it("TC 19: exploring products' brand", () => {
    menu.openProductsTab();
    cy.contains("h2", "Brands").should("exist");
    hub.clickBrandPolo();
    cy.contains(/Brand - Polo Products/i).should("exist");
    hub.clickBrandHM();
    cy.contains(/Brand - H&M Products/i).should("exist");
  });

  it("TC 20: searchproducts and verify after login", () => {
    menu.openProductsTab();
    hub.productsPage.searchProduct("jeans");
    cy.contains(/Searched Products/i).should("exist");
    cy.addProductToCartById(33);
    hub.continueShoppingButton();
    cy.addProductToCartById(35);
    hub.continueShoppingButton();
    cy.addProductToCartById(37);
    hub.viewCartLink();

    hub.cartPage.verifyProductNameById(33);
    hub.cartPage.verifyProductNameById(35);
    hub.cartPage.verifyProductNameById(37);

    menu.openLoginTab();
    loginPage.loginUser("tescik@test.ts", "testowy@");

    menu.openCartTab();
    hub.cartPage.verifyProductNameById(33);
    hub.cartPage.verifyProductNameById(35);
    hub.cartPage.verifyProductNameById(37);
  });

  it("TC 21: add review", () => {
    menu.openProductsTab();
    cy.goToProductDetails(3);

    cy.contains("a", "Write Your Review").should("be.visible");
    hub.productsPage.submitReview("Tescik", "tescik@test.ts", "test message");
    cy.contains("span", "Thank you for your review.").should("be.visible");
  });

  it("TC 22: recommended items", () => {
    cy.contains(/recommended items/i).should("exist");
    cy.get("#recommended-item-carousel").within(() => {
      cy.get('[data-slide="next"]').click();
      cy.get('[data-product-id="3"]').click();
    });

    hub.viewCartLink();
    hub.cartPage.verifyProductNameById(3);
  });

  after("Deleting user", () => {
    menu.openLoginTab();
    loginPage.loginUser("tescik@test.ts", "testowy@");

    cy.contains("a", " Logged in as Tescik").should("exist");
    menu.deleteUserTab();
  });
});
