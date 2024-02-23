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
        return cy.getDataQa('name')
    }

    // In case to change password
    get password() {
        return cy.getDataQa('password')
    }

    get birthDay() {
        return cy.getDataQa('days');
    }

    get birthMonth() {
        return cy.getDataQa('months');
    }

    get birthYear() {
        return cy.getDataQa('years');
    }

    get newsletterCheck() {
        return cy.get('#newsletter');

    }

    get specialOffersCheck() {
        return cy.get('#optin')
    }

    // Address Information
    get firstName() {
        return cy.getDataQa('first_name');
    }

    get lastName() {
        return cy.getDataQa('last_name')
    }

    get company() {
        return cy.getDataQa('company')
    }

    get address1() {
        return cy.getDataQa('address')
    }

    get address2() {
        return cy.getDataQa('address2')
    }

    get country() {
        return cy.getDataQa('country')
    }

    get state() {
        return cy.getDataQa('state')
    }

    get city() {
        return cy.getDataQa('city')
    }

    get zipCode() {
        return cy.getDataQa('zipcode')
    }

    get mobileNumber() {
        return cy.getDataQa('mobile_number')
    }

    get btnCreateAcc() {
        return cy.getDataQa("create-account")
    }


    createAcc(
        name, password, day, month, year,  firstName, 
        lastName, company, address1, address2, 
        country, state, city, zipcode, mobile
    ) {
        cy.contains("b", "Enter Account Information")
            .should("exist");
        this.mrTitle.check();
        this.name.clear().type(name)
        this.password.clear().type(password);
        this.birthDay.select(day);
        this.birthMonth.select(month);
        this.birthYear.select(year);
        this.newsletterCheck.check();
        this.specialOffersCheck.check();
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

        cy.getDataQa("account-created").should("be.visible");
        cy.getDataQa("continue-button").click();
        cy.contains("a", ` Logged in as ${name}`).should("exist");
    }
}

export default Signup