/// <reference types="cypress" />

import PageComponent from "../component/pageComponent";
import MenuComponent from "../component/menuComponent";
import SignupLogin from "../pages/signupLogin.cy";

const page = new PageComponent();
const menu = new MenuComponent();
const signupLogin = new SignupLogin();

describe("Test Case 20: Search Products and Verify Cart After Login", () => {
    before('Registering user', () => {
        cy.visit("/");
        menu.signupLogin();
        // REGISTERING USER
        signupLogin.signupUser("Tescik", "tescik@test.ts");
        // ENTER ACCOUNT INFORMATION
        signupLogin.signup.enterAccInfo("testowy@", "30", "10", "1955");
        signupLogin.signup.addressInfo(
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

        menu.logoutAccount();
    });

  it("exploring Brand", () => {
        cy.visit("/");
        menu.products();
        page.searchProduct('jeans');
        page.products.getJeans1();
        page.continueShopping();
        page.products.getJeans2();
        page.continueShopping();
        page.products.getJeans3();
        page.viewCart();
        page.products.verifyAllJeans();
        menu.signupLogin();
        signupLogin.loginUser('tescik@test.ts', 'testowy@');
        menu.cart();
        page.products.verifyAllJeans();
  });

    after('Deleting user', () => {
        menu.deleteAccount();
    });
});