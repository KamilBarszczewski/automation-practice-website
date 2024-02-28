/// <reference types="cypress" />

class PaymentPage {
  get inputCardName() {
    return cy.getDataQa("name-on-card");
  }

  get inputCardNumber() {
    return cy.getDataQa("card-number");
  }

  get inputCvcNumber() {
    return cy.getDataQa("cvc");
  }

  get inputExpiryMonth() {
    return cy.getDataQa("expiry-month");
  }

  get inputExpiryYear() {
    return cy.getDataQa("expiry-year");
  }

  get btnPay() {
    return cy.getDataQa("pay-button");
  }

  get btnContinue() {
    return cy.getDataQa("continue-button");
  }

  confirmPayment(cardName, cardNumber, cardCvc, expMonth, expYear) {
    this.inputCardName.clear().type(cardName);
    this.inputCardNumber.clear().type(cardNumber);
    this.inputCvcNumber.clear().type(cardCvc);
    this.inputExpiryMonth.clear().type(expMonth);
    this.inputExpiryYear.clear().type(expYear);
    this.btnPay.click();
    cy.contains("p", "Congratulations! Your order has been confirmed!").should(
      "be.visible"
    );
  }

  continueButton() {
    this.btnContinue.click();
  }
}

export default PaymentPage;
