/// <reference types="cypress" />

describe("Test Case 1: Register User", () => {
  it("Registering user to exercise page", () => {
    cy.visit("/");
    // REGISTER USER
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
    // DELETE USER
    cy.get('.fa-trash-o').click()
    cy.contains('b', 'Account Deleted!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click()
  });
});


/*
Test Case 1: Register User
#1. Launch browser
#2. Navigate to url 'http://automationexercise.com'
#3. Verify that home page is visible successfully
#4. Click on 'Signup / Login' button
#5. Verify 'New User Signup!' is visible
#6. Enter name and email address
#7. Click 'Signup' button
#8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
#9. Fill details: Title, Name, Email, Password, Date of birth
#10. Select checkbox 'Sign up for our newsletter!'
#11. Select checkbox 'Receive special offers from our partners!'
#12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
#13. Click 'Create Account button'
#14. Verify that 'ACCOUNT CREATED!' is visible
#15. Click 'Continue' button
#16. Verify that 'Logged in as username' is visible
#17. Click 'Delete Account' button
#18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
*/
