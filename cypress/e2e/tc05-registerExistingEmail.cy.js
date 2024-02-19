/// <reference types="cypress" />

import SignupLogin from "./../pages/signupLogin.cy";
import Signup from "../pages/signup.cy";
import MenuComponent from "./../component/menuComponent";

const signupLogin = new SignupLogin();
const signup = new Signup();
const menu = new MenuComponent();

describe("Test Case 5: Register User with existing email", () => {
    it("Registering user to exercise page", () => {
      cy.visit("/");
      menu.signupLogin();
      signupLogin.signupUser("Tescik", "tescik@test.ts");
      
      cy.contains('p', 'Email Address already exist!').should('be.visible')
    });
});