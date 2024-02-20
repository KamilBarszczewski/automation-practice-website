/// <reference types="cypress" />

import MenuComponent from "../component/menuComponent";
import PageComponent from "../component/pageComponent"
import SignupLogin from "../pages/signupLogin.cy";
import Signup from "../pages/signup.cy";
import Products from "../pages/products.cy";
import Payment from "../pages/payment.cy";
import Checkout from "../pages/checkout.cy";
import Cart from "../pages/cart.cy"

const menu = new MenuComponent();
const signupLogin = new SignupLogin();
const signup = new Signup();
const products = new Products();
const payment = new Payment();
const checkout = new Checkout();
const page = new PageComponent();
const cart = new Cart();

describe("Test Case 16: Place Order: Login before Checkout", () => {
    before('Registering user', () => {
        cy.visit("/");
        menu.signupLogin();
        // REGISTERING USER
        signupLogin.signupUser("Tescik", "tescik@test.ts");
        // ENTER ACCOUNT INFORMATION
        signup.enterAccInfo("testowy@", "30", "10", "1955");
        signup.addressInfo(
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
        products.getFirstProduct();
        page.continueShopping();
        products.getSecondProduct();
        page.viewCart();
        cart.checkout();
        checkout.placeOrder('Test message');
        payment.confirmPayment(
        'Testeusz Testeuszewicz', '123456789', '123', '123', '2025'
        );

        // DELETE USER
        menu.deleteAccount();
    });
});