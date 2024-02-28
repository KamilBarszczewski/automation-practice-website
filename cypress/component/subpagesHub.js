/// <reference types="cypress" />

import Cart from "../pages/cartPage.cy";
import Checkout from "../pages/checkoutPage.cy";
import ContactUs from "../pages/contactUsPage.cy";
import Payment from "../pages/paymentPage.cy";
import Products from "../pages/productsPage.cy";
import HomePage from "../pages/homePage.cy";

class SubpagesHub {
  home = new HomePage();
  products = new ProductsPage();
  payment = new PaymentPage();
  checkout = new CheckoutPage();
  cart = new CartPage();
  contactUs = new ContactUsPage();
}

export default SubpagesHub;
