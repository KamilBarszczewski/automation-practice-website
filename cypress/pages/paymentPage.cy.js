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

  get invoice() {
    return cy.contains("Download Invoice").should("exist");
  }

  fillPaymentForm(cardName, cardNumber, cardCvc, expMonth, expYear) {
    this.inputCardName.clear().type(cardName);
    this.inputCardNumber.clear().type(cardNumber);
    this.inputCvcNumber.clear().type(cardCvc);
    this.inputExpiryMonth.clear().type(expMonth);
    this.inputExpiryYear.clear().type(expYear);
    this.btnPay.click();
  }

  downloadInvoiceButton() {
    this.invoice.click();
  }

  continueButton() {
    this.btnContinue.click();
  }
}

export default PaymentPage;
