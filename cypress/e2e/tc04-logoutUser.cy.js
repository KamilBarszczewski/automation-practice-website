/// <reference types="cypress" />

describe('Test Case 2: Login User with correct email and password', () => {

    it('Log in & log out user with correct login and passworrd', () => {
        cy.visit("/");
        cy.get('img[src="/static/images/home/logo.png"]').should("be.visible");
        cy.get('a[href="/login"]').contains(" Signup / Login").click();
        cy.url().should("include", "/login");
        cy.contains("h2", "Login to your account").should("be.visible");
        cy.get('input[data-qa="login-email"]').clear()
        cy.get('input[data-qa="login-email"]').type('tescik@test.ts');
        cy.get('input[data-qa="login-password"]').clear()
        cy.get('input[data-qa="login-password"]').type('testowy@');
        cy.get('button[data-qa="login-button"]').click();
        cy.contains('a', ' Logged in as ').should('be.visible');

        // LOG OUT USER
        cy.get('.fa-lock').click()
    })
})