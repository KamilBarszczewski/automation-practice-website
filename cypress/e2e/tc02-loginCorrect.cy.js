/// <reference types="cypress" />

describe('Test Case 2: Login User with correct email and password', () => {
    before("Registering user to exercise page", () => {
        cy.visit("/");
        // REGISTERING USER
        cy.get('img[src="/static/images/home/logo.png"]').should("be.visible");
        cy.get('a[href="/login"]').contains(" Signup / Login").click();
        cy.url().should("include", "/login");
        cy.contains("h2", "New User Signup!").should("be.visible");
        cy.get('input[data-qa="signup-name"]').type("Tescik");
        cy.get('input[data-qa="signup-email"]').type("tescik@test.ts");
        cy.get('button[data-qa="signup-button"]').click();
    
        cy.contains("b", "Enter Account Information").should("be.visible");
        // ENTER ACCOUNT INFORMATION
        cy.get('#id_gender1').check()
        cy.get('[data-qa="password"]').type('testowy@', {delay:300})
        cy.get('#days').select('30');
        cy.get('#months').select('10');
        cy.get('#years').select('1955');
        cy.get('#newsletter').check()
        cy.get('#optin').check()

        // INSERT ADDRESS INFORMATION
        cy.get('#first_name').type("Testeusz");
        cy.get('#last_name').type("Testeuszewicz");
        cy.get('#company').type("Test-Soft");
        cy.get('#address1').type("Testowa 11");
        cy.get('#address2').type("Testowa 12");
        cy.get('#country').select('United States');
        cy.get('#state').type('Nevada');
        cy.get('#city').type("Testowo Testowe");
        cy.get('#zipcode').type('555333111'),
        cy.get('#mobile_number').type('0084555666777'),
        cy.get('button[data-qa="create-account"]').click()

        cy.get('[data-qa="account-created"]').should('be.visible');
        cy.get('[data-qa="continue-button"]').click()
        cy.contains('a', ' Logged in as ').should('be.visible');
        cy.get('.fa-lock').click()
    });

    it('Logging user with correct login and passworrd', () => {
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

        // DELETE USER
        cy.get('.fa-trash-o').click()
        cy.contains('b', 'Account Deleted!').should('be.visible');
        cy.get('[data-qa="continue-button"]').click()



    })
})

/*
#1. Launch browser
#2. Navigate to url 'http://automationexercise.com'
#3. Verify that home page is visible successfully
#4. Click on 'Signup / Login' button
#5. Verify 'Login to your account' is visible
#6. Enter correct email address and password
#7. Click 'login' button
#8. Verify that 'Logged in as username' is visible
#9. Click 'Delete Account' button
#10. Verify that 'ACCOUNT DELETED!' is visible
*/