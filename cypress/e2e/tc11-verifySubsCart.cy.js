describe("Test Case 11: Verify Subscription in Cart page", () => {
    it("Veryfying Subscription", () => {
        cy.visit("/");
        cy.get('img[src="/static/images/home/logo.png"]').should("be.visible");
        cy.get('a[href="/view_cart"]').contains(' Cart').click({force: true});
        
        cy.contains('h2', 'Subscription').should('be.visible');
        cy.get('#susbscribe_email').scrollIntoView().clear().type('tescik@test.ts');
        cy.get('#subscribe').click();
        cy.get('#success-subscribe').should('be.visible');
    });
});