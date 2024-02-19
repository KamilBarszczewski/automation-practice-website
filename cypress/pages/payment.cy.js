/// <reference types="cypress" />

class Payment {
    get inputCardName() {
        return cy.get('input[data-qa="name-on-card"]')
    }

    get inputCardNumber() {
        return cy.get('input[data-qa="card-number"]')
    }

    get inputCvcNumber() {
        return  cy.get('input[data-qa="cvc"]')
    }

    get inputExpiryMonth() {
        return cy.get('input[data-qa="expiry-month"]')
    }

    get inputExpiryYear() {
        return  cy.get('input[data-qa="expiry-year"]')
    }

    get btnPay() {
        return cy.get('button[data-qa="pay-button"]')
    }

    confirmPayment(
        cardName, cardNumber, cardCvc, expMonth, expYear
        ) {
            this.inputCardName.clear().type(cardName);
            this.inputCardNumber.clear().type(cardNumber);
            this.inputCvcNumber.clear().type(cardCvc);
            this.inputExpiryMonth.clear().type(expMonth);
            this.inputExpiryYear.clear().type(expYear);
            this.btnPay.click();
            cy.contains("p", "Congratulations! Your order has been confirmed!").should("be.visible")
    }

}

export default Payment;