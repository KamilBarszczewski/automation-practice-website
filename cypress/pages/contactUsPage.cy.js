/// <reference types="cypress" />

class ContactUsPage {
  get name() {
    return cy.getDataQa("name");
  }

  get email() {
    return cy.getDataQa("email");
  }

  get subject() {
    return cy.getDataQa("subject");
  }

  get message() {
    return cy.getDataQa("message");
  }

  get uploadFile() {
    return cy.get('input[name="upload_file"]');
  }

  get btnSubmit() {
    return cy.getDataQa("submit-button");
  }

  get btnHome() {
    return cy.get("#form-section").contains(" Home");
  }

  fillContactForm(name, email, subject, message, file) {
    cy.contains("h2", "Get In Touch").should("be.visible");
    this.name.clear().type(name);
    this.email.clear().type(email);
    this.subject.clear().type(subject);
    this.message.clear().type(message);
    this.uploadFile.selectFile(file);
    this.btnSubmit.click();
  }

  homePageButton() {
    this.btnHome.click();
  }
}

export default ContactUsPage;
