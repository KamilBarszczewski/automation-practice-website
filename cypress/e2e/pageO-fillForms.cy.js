/// <reference types="cypress" />
import MenuComponent from "../component/menuComponent";
import SubpagesHub from "../component/subpagesHub";

const menu = new MenuComponent();
const hub = new SubpagesHub();

describe("TC 6: fill form on Contact Us subpage", () => {
  beforeEach("", () => {
    cy.visit("/");
    cy.location("pathname").should("equal", "/");
  });

  it("Filling up form", () => {
    menu.contactUs();
    hub.contactUs.contactUsForm(
      "Testeusz Testowy",
      "tescik@test.ts",
      "Temat testowy",
      "Wiadomosc testowa",
      "cypress/fixtures/faun.webp"
    );

    hub.contactUs.homeButton();
  });
});
