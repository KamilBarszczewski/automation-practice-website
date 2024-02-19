/// <reference types="cypress" />

import MenuComponent from "../component/menuComponent";
import SignupLogin from "../pages/signupLogin.cy";
import Signup from "../pages/signup.cy";
import Cart from "../pages/cart.cy";
import PageComponent from "../component/pageComponent";
import Payment from "../pages/payment.cy";
import Checkout from "../pages/checkout.cy";

const menu = new MenuComponent();
const signupLogin = new SignupLogin();
const signup = new Signup();
const cart = new Cart();
const page = new PageComponent();
const payment = new Payment();
const checkout = new Checkout();

describe("Test Case 15: Place Order: Register before Checkout", () => {
  it("registering user then checkout", () => {
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
 
    //cy.visit("/")
    menu.products();
    cy.get('.single-products').contains('Blue Top').trigger('mouseover');
    cy.get('a[data-product-id="1"]').contains('Add to cart').invoke('show').click();

    page.continueShopping();

    cy.get('a[data-product-id="3"]').contains("Add to cart").invoke("show").click();

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

