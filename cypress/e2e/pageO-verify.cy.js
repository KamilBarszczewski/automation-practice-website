/// <reference types="cypress" />
import MenuComponent from "../component/menuComponent";
import SubpagesHub from "../component/subpagesHub";

const menu = new MenuComponent();
const hub = new SubpagesHub();

describe("verify pages", () => {
  beforeEach("", () => {
    cy.visit("/");
    cy.location("pathname").should("equal", "/");
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
});
