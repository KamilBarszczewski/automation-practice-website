/// <reference types="cypress" />

describe('Test Case 3: Login User with incorrect email and password', () => {
    
    it('Logging user with incorrect login and passworrd', () => {
        cy.visit("/");
        cy.get('img[src="/static/images/home/logo.png"]').should("be.visible");
        cy.get('a[href="/login"]').contains(" Signup / Login").click();
        cy.url().should("include", "/login");
        cy.contains("h2", "Login to your account").should("be.visible");
        cy.get('input[data-qa="login-email"]').clear()
        cy.get('input[data-qa="login-email"]').type('Errortescik@test.ts');
        cy.get('input[data-qa="login-password"]').clear()
        cy.get('input[data-qa="login-password"]').type('Errortestowy@');
        cy.get('button[data-qa="login-button"]').click();

        cy.get('p').should('contain', 'Your email or password is incorrect!')
    })

});

/*
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter incorrect email address and password
7. Click 'login' button
8. Verify error 'Your email or password is incorrect!' is visible
*/