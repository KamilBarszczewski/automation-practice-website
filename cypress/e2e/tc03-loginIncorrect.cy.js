/// <reference types="cypress" />

import SignupLogin from "./../pages/signupLogin.cy";
import MenuComponent from "./../component/menuComponent";

const signupLogin = new SignupLogin();
const menu = new MenuComponent();

describe("Test Case 3: Login User with incorrect email and password", () => {
  it("log in user with incorrect login and passworrd", () => {
    cy.visit("/");
    menu.signupLogin();
    cy.contains(/your email or password is incorrect!/i).should("not.exist");
    signupLogin.loginUser("Errortescik@test.ts", "Errortestowy@");
    cy.contains(/your email or password is incorrect!/i).should("exist");
    //cy.get("p").should("contain", "Your email or password is incorrect!");
  });
});
