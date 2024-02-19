/// <reference types="cypress" />

class ContactUs {
    get name() {
        return cy.get('input[data-qa="name"]')
    }

    get email() {
        return cy.get('input[data-qa="email"]')
    }

    get subject() {
        return cy.get('input[data-qa="subject"]')
    }

    get message() {
        return cy.get('textarea[data-qa="message"]')
    }

    get uploadFile() {
        return cy.get('input[name="upload_file"]')
    }

    get btnSubmit() {
        return cy.get('input[data-qa="submit-button"]')
    }

    get btnHome() {
        return cy.get('#form-section').contains(' Home')
    }

    contactUsForm(
        name, email, subject, message, file
    ) {
        cy.contains('h2', 'Get In Touch').should('be.visible');
        this.name.clear().type(name);
        this.email.clear().type(email);
        this.subject.clear().type(subject);
        this.message.clear().type(message);
        this.uploadFile.selectFile(file);
        this.btnSubmit.click();
    }

    homeButton() {
        cy.contains('div', 'Success! Your details have been submitted successfully.').should('be.visible')
        this.btnHome.click();
        cy.contains("h2", "Features Items").should("be.visible");
    }
}

export default ContactUs;
