/// <reference types="cypress" />

import SignupLogin from "./../pages/signupLogin.cy";
import MenuComponent from "./../component/menuComponent";

const signupLogin = new SignupLogin();
const menu = new MenuComponent();

describe("Test Case 5: Register User with existing email", () => {
  it("Register user with existing credencials", () => {
    cy.visit("/");
    menu.signupLogin();
    signupLogin.signupUser("Tescik", "tescik@test.ts");

    cy.contains(/Email Address already exist!/i).should("exist");
  });
});
