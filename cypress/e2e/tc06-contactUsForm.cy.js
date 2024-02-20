/// <reference types="cypress" />

import MenuComponent from "./../component/menuComponent";
import ContactUs from "../pages/contactUs.cy";

const menu = new MenuComponent();
const contactUs = new ContactUs();

describe("Test Case 6: Contact Us form", () => {
    it("Filling up form", () => {
      cy.visit("/");
      menu.contactUs();
      contactUs.contactUsForm(
        'Testeusz Testowy',
        'tescik@test.ts',
        'Temat testowy',
        'Wiadomosc testowa',
        'cypress/fixtures/faun.webp',
      );

      contactUs.homeButton();
    });
});