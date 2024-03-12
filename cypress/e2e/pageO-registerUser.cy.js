/// <reference types="cypress" />
import MenuComponent from "../component/menuComponent";
import LoginPage from "../pages/loginPage.cy";

const menu = new MenuComponent();
const loginPage = new LoginPage();

describe("register user", () => {
  before("go to landing page", () => {
    cy.visit("/");
    cy.location("pathname").should("equal", "/");
  });

  it("successfully register user", () => {
    menu.openLoginTab();
    cy.contains("h2", "New User Signup!").should("be.visible");
    loginPage.signupUser("Tescik", "tescik@test.ts");
    cy.contains("b", "Enter Account Information").should("exist");

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
  });

  after(() => {
    //cy.pause();
    menu.deleteUserTab();
  });
});
