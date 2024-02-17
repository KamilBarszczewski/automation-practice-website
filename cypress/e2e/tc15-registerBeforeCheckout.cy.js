/// <reference types="cypress" />

describe("Test Case 15: Place Order: Register before Checkout", () => {
  it("registering user then checkout", () => {
    cy.visit("/");
    cy.contains("h2", "Features Items").should("be.visible");
    cy.get('a[href="/login"]').contains(" Signup / Login").click();

    cy.url().should("include", "/login");
    cy.contains("h2", "New User Signup!").should("be.visible");
    cy.get('input[data-qa="signup-name"]').clear().type("Tescik");
    cy.get('input[data-qa="signup-email"]').clear().type("tescik@test.ts");
    cy.get('button[data-qa="signup-button"]').click();

    cy.contains("b", "Enter Account Information").should("be.visible");

    // ENTER ACCOUNT INFORMATION
    cy.get("#id_gender1").check();
    cy.get('[data-qa="password"]').clear().type("testowy@", { delay: 300 });
    cy.get("#days").select("30");
    cy.get("#months").select("10");
    cy.get("#years").select("1955");
    cy.get("#newsletter").check();
    cy.get("#optin").check();

    // INSERT ADDRESS INFORMATION
    cy.get("#first_name").clear().type("Testeusz");
    cy.get("#last_name").clear().type("Testeuszewicz");
    cy.get("#company").clear().type("Test-Soft");
    cy.get("#address1").clear().type("Testowa 11");
    cy.get("#address2").clear().type("Testowa 12");
    cy.get("#country").select("United States");
    cy.get("#state").clear().type("Nevada");
    cy.get("#city").clear().type("Testowo Testowe");
    cy.get("#zipcode").clear().type("555333111");
    cy.get("#mobile_number").clear().type("0084555666777");
    cy.get('button[data-qa="create-account"]').click();

    cy.get('[data-qa="account-created"]').should("be.visible");
    cy.get('[data-qa="continue-button"]').click();
    cy.contains("a", " Logged in as ").should("be.visible");
    cy.contains("h2", "Features Items").should("be.visible");
    cy.get('a[data-product-id="3"]')
      .contains("Add to cart")
      .invoke("show")
      .click();
    cy.get('a[href="/view_cart"]').contains(" Cart").click({ force: true });

    cy.contains(".check_out", "Proceed To Checkout").click();

    cy.get('div[data-qa="checkout-info"]').should("be.visible");
    cy.get("#cart_info").should("be.visible");
    cy.get('textarea[name="message"]').clear().type("test message");
    cy.get('a[href="/payment"]').contains("Place Order").click();

    // PAYMENT
    cy.get('input[data-qa="name-on-card"]')
      .clear()
      .type("Testeusz Testeuszewicz");
    cy.get('input[data-qa="card-number"]').clear().type("123456789");
    cy.get('input[data-qa="cvc"]').clear().type("123");
    cy.get('input[data-qa="expiry-month"]').clear().type("12");
    cy.get('input[data-qa="expiry-year"]').clear().type("2025");
    cy.get('button[data-qa="pay-button"]').click();
    cy.contains("p", "Congratulations! Your order has been confirmed!").should(
      "be.visible"
    );

    // DELETE USER
    cy.get(".fa-trash-o").click();
    cy.contains("b", "Account Deleted!").should("be.visible");
    cy.get('[data-qa="continue-button"]').click();
  });
});
