/// <reference types="cypress" />
import MenuComponent from "../component/menuComponent";
import LoginPage from "../pages/loginPage.cy";

const menu = new MenuComponent();
const login = new LoginPage();

describe("", () => {
  before("visit starting page", () => {
    cy.visit("/");
    menu.signupLogin();
    login.signupUser("Tescik", "tescik@test.ts");
    login.signup.createUser(
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

  beforeEach("register user", () => {
    cy.visit("/");
    cy.location("pathname").should("equal", "/");
  });

  it("TC 2: login user with correct login and password", () => {
    menu.signupLogin();
    login.loginUser("tescik@test.ts", "testowy@");
  });

  it("TC 3: login user with incorrect login and password", () => {
    menu.signupLogin();
    cy.contains(/your email or password is incorrect!/i).should("not.exist");
    login.loginUser("errortescik@test.ts", "errortestowy@");
    cy.contains(/your email or password is incorrect!/i).should("exist");
  });

  it("TC 4: logout user", () => {
    menu.signupLogin();
    login.loginUser("tescik@test.ts", "testowy@");
    menu.logoutUser();
  });

  it("TC 5: register user with existing credentials", () => {
    menu.signupLogin();
    cy.contains(/Email Address already exist!/i).should("not.exist");
    login.signupUser("Tescik", "tescik@test.ts");
    cy.contains(/Email Address already exist!/i).should("exist");
  });

  after("delete user", () => {
    menu.signupLogin();
    login.loginUser("tescik@test.ts", "testowy@");
    menu.deleteUser();
  });
});
