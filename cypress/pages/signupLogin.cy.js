/// <reference types="cypress" />

class SignupLogin {

    get signupName() {
        return cy.get('input[data-qa="signup-name"]');
    }

    get signupEmail() {
        return cy.get('input[data-qa="signup-email"]');
    }

    get btnSignup() {
        return cy.get('button[data-qa="signup-button"]');
    }

    get loginEmail() {
        return cy.get('input[data-qa="login-email"]');
    }

    get loginPassword() {
        return cy.get('input[data-qa="login-password"]')
    }

    get btnLogin() {
        return cy.get('button[data-qa="login-button"]')
    }

    signupUser(name, email) {
        cy.url().should("include", "/login");
        cy.contains("h2", "New User Signup!").should("be.visible");
        this.signupName.clear().type(name);
        this.signupEmail.clear().type(email);
        this.btnSignup.click();
    }

    loginUser(email, password) {
        cy.url().should("include", "/login");
        cy.contains("h2", "Login to your account")
        .should("be.visible");
        this.loginEmail.clear().type(email);
        this.loginPassword.clear().type(password);
        this.btnLogin.click();
    }
}

export default SignupLogin