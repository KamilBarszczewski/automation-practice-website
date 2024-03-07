/// <reference types="cypress" />

import MenuComponent from "./../component/menuComponent";
import PageComponent from "../component/pageComponent";

const menu = new MenuComponent();
const page = new PageComponent();

describe("Test Case 6: Contact Us form", () => {
    it("Filling up form", () => {
      cy.visit("/");
      menu.contactUs();
      page.contactUs.contactUsForm(
        'Testeusz Testowy',
        'tescik@test.ts',
        'Temat testowy',
        'Wiadomosc testowa',
        'cypress/fixtures/faun.webp',
      );

      page.contactUs.homeButton();
    });
});