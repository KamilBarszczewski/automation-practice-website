/// <reference types="cypress" />

import PageComponent from "../component/pageComponent";
import MenuComponent from "../component/menuComponent";
import SignupLogin from "../pages/signupLogin.cy";

const page = new PageComponent()
const menu = new MenuComponent();
const signupLogin = new SignupLogin();

describe("Test Case 16: Place Order: Login before Checkout", () => {
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

    it("Login user then checkout", () => {
        cy.visit("/");
        menu.signupLogin();
        signupLogin.loginUser('tescik@test.ts', 'testowy@')

        menu.products();
        page.products.getFirstProduct();
        page.continueShopping();
        page.products.getSecondProduct();
        page.viewCart();
        page.cart.checkout();
        page.checkout.placeOrder('Test message');
        page.payment.confirmPayment(
        'Testeusz Testeuszewicz', '123456789', '123', '123', '2025'
        );

        // DELETE USER
        menu.deleteAccount();
    });
});