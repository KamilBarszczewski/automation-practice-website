/// <reference types="cypress" />

import CartPage from "../pages/cartPage.cy";
import CheckoutPage from "../pages/checkoutPage.cy";
import ContactUsPage from "../pages/contactUsPage.cy";
import PaymentPage from "../pages/paymentPage.cy";
import ProductPage from "../pages/productPage.cy";
import HomePage from "../pages/homePage.cy";

class SubpagesHub {
  home = new HomePage();
  products = new ProductPage();
  payment = new PaymentPage();
  checkout = new CheckoutPage();
  cart = new CartPage();
  contactUs = new ContactUsPage();
}

export default SubpagesHub;
