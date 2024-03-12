/// <reference types="cypress" />
import MenuComponent from "../component/menuComponent";
import LoginPage from "../pages/loginPage.cy";

const menu = new MenuComponent();
const loginPage = new LoginPage();

describe("", () => {
  before("visit starting page", () => {
    cy.visit("/");
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

    menu.logoutUserTab();
  });

  beforeEach("register user", () => {
    cy.visit("/");
    cy.location("pathname").should("equal", "/");
  });

  it("TC 2: login user with correct login and password", () => {
    menu.openLoginTab();
    cy.contains("h2", "Login to your account").should("be.visible");
    loginPage.loginUser("tescik@test.ts", "testowy@");
    cy.contains("a", " Logged in as Tescik").should("exist");
  });

  it("TC 3: login user with incorrect login and password", () => {
    menu.openLoginTab();
    cy.contains(/your email or password is incorrect!/i).should("not.exist");
    loginPage.loginUser("errortescik@test.ts", "errortestowy@");
    cy.contains(/your email or password is incorrect!/i).should("exist");
  });

  it("TC 4: logout user", () => {
    menu.openLoginTab();
    cy.contains("h2", "Login to your account").should("be.visible");
    loginPage.loginUser("tescik@test.ts", "testowy@");
    cy.contains("a", " Logged in as Tescik").should("exist");
    menu.logoutUserTab();
    cy.location("pathname").should("equal", "/login");
  });

  it("TC 5: register user with existing credentials", () => {
    menu.openLoginTab();
    cy.contains("h2", "New User Signup!").should("be.visible");
    cy.contains(/Email Address already exist!/i).should("not.exist");
    loginPage.signupUser("Tescik", "tescik@test.ts");
    cy.contains(/Email Address already exist!/i).should("exist");
  });

  after("delete user", () => {
    menu.openLoginTab();
    loginPage.loginUser("tescik@test.ts", "testowy@");
    cy.contains("a", " Logged in as Tescik").should("exist");
    menu.deleteUserTab();
  });
});
