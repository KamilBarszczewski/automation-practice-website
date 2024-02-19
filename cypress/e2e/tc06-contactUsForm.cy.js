/// <reference types="cypress" />

import SignupLogin from "./../pages/signupLogin.cy";
import Signup from "../pages/signup.cy";
import MenuComponent from "./../component/menuComponent";
import ContactUs from "../pages/contactUs.cy";

const signupLogin = new SignupLogin();
const signup = new Signup();
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