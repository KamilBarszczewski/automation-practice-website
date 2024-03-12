Cypress.Commands.add("getDataQa", (dataQaSelector) => {
  return cy.get(`[data-qa="${dataQaSelector}"]`);
});

Cypress.Commands.add("goToProductDetails", (productNumber) => {
  return cy.get(`[href="/product_details/${productNumber}"]`).click();
});

Cypress.Commands.add("linkToPage", (endpoint) => {
  return cy.get(`[href="/${endpoint}"]`);
});

Cypress.Commands.add("addProductToCartById", (productNumber) => {
  return cy.get('div[class="features_items"]').within(() => {
    cy.get(`a[data-product-id="${productNumber}"]`)
      .contains("Add to cart")
      .invoke("show")
      .click();
  });
});
