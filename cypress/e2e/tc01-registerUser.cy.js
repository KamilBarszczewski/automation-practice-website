/// <reference types="cypress" />

import SignupLogin from "./../pages/signupLogin.cy";
import MenuComponent from "./../component/menuComponent";

const signupLogin = new SignupLogin();
const menu = new MenuComponent();

describe("Test Case 1: Register User", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("register and delete User", () => {
    menu.signupLogin();
    // REGISTERING USER
    signupLogin.signupUser("Tescik", "tescik@test.ts");
    // ENTER ACCOUNT INFORMATION
    signupLogin.signup.createAcc(
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

    // DELETE ACCOUNT
    menu.deleteAccount();
  });
});
