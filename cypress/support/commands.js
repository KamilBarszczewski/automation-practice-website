Cypress.Commands.add("getDataQa", (dataQaSelector) => {
  return cy.get(`[data-qa="${dataQaSelector}"]`);
});

Cypress.Commands.add("getProduct", (productNumber) => {
  return cy.get(`[href="/product_details/${productNumber}"]`).click();
});

Cypress.Commands.add("getSubpage", (sub_page) => {
  return cy.get(`[href="/${sub_page}"]`);
});
