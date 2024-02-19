/// <reference types="cypress" />

class Signup {

    // Account Information
    get mrTitle() {
        return cy.get('#id_gender1'); 
    }

    get mrsTitle() {
        return cy.get('#id_gender2')
    }

    // In case to change name
    get name() {
        return cy.get('#name')
    }

    // In case to change password
    get password() {
        return cy.get('#password')
    }

    get birthDay() {
        return cy.get('#days');
    }

    get birthMonth() {
        return cy.get('#months');
    }

    get birthYear() {
        return  cy.get('#years');
    }

    get newsletterCheck() {
        return cy.get('#newsletter');

    }

    get specialOffersCheck() {
        return cy.get('#optin')
    }

    // Address Information
    get firstName() {
        return cy.get('#first_name');
    }

    get lastName() {
        return cy.get('#last_name')
    }

    get company() {
        return cy.get('#company')
    }

    get address1() {
        return cy.get('#address1')
    }

    get address2() {
        return cy.get('#address2')
    }

    get country() {
        return cy.get('#country')
    }

    get state() {
        return cy.get('#state')
    }

    get city() {
        return cy.get('#city')
    }

    get zipCode() {
        return cy.get('#zipcode')
    }

    get mobileNumber() {
        return cy.get('#mobile_number')
    }

    get btnCreateAcc() {
        return cy.get('button[data-qa="create-account"]')
    }


    enterAccInfo(
        password, day, month, year,
    ) {
        cy.contains("b", "Enter Account Information")
            .should("be.visible");
        this.mrTitle.check();
        this.password.clear().type(password),
        this.birthDay.select(day);
        this.birthMonth.select(month);
        this.birthYear.select(year);
        this.newsletterCheck.check();
        this.specialOffersCheck.check();

    }

    addressInfo(
        firstName, lastName, company,
        address1, address2, country,
        state, city, zipcode, mobile
    ) {
        this.firstName.clear().type(firstName);
        this.lastName.clear().type(lastName);
        this.company.clear().type(company);
        this.address1.clear().type(address1);
        this.address2.clear().type(address2);
        this.country.select(country);
        this.state.clear().type(state);
        this.city.clear().type(city);
        this.zipCode.clear().type(zipcode);
        this.mobileNumber.clear().type(mobile);
        this.btnCreateAcc.click();

        cy.get('[data-qa="account-created"]').should("be.visible");
        cy.get('[data-qa="continue-button"]').click();
        cy.contains("a", " Logged in as ").should("be.visible");
    }
}

export default Signup