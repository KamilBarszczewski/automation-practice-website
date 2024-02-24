/// <reference types="cypress" />

import SignupLogin from "./../pages/signupLogin.cy";
import MenuComponent from "./../component/menuComponent";

const signupLogin = new SignupLogin();
const menu = new MenuComponent();

describe("Test Case 2: Login User with correct email and password", () => {
  before("Registering user on page", () => {
    cy.visit("/");
    menu.signupLogin();
    // REGISTERING USER
    signupLogin.signupUser("Tescik", "tescik@test.ts");
    // ENTER ACCOUNT INFORMATION
    signupLogin.signup.createUser(
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
  });

  it("Log in & log out user with correct login and passworrd", () => {
    cy.visit("/");
    menu.signupLogin();
    signupLogin.loginUser("tescik@test.ts", "testowy@");
    // LOG OUT USER
    menu.logoutUser();
  });
});
