Cypress.Commands.add("getDataQa", (dataQaSelector) => {
  return cy.get(`[data-qa="${dataQaSelector}"]`);
});

Cypress.Commands.add("getProduct", (productNumber) => {
  return cy.get(`[href="/product_details/${productNumber}"]`).click();
});

Cypress.Commands.add("getSubpage", (sub_page) => {
  return cy.get(`[href="/${sub_page}"]`);
});

Cypress.Commands.add("addToCart", (productNumber) => {
  return cy.get('div[class="features_items"]').within(() => {
    cy.get(`a[data-product-id="${productNumber}"]`)
      .contains("Add to cart")
      .invoke("show")
      .click();
  });
});

// Cypress.Commands.add("addToCart", (productNumber) => {
//   return cy.get('div[class="features_items"]').within(() => {
//     cy.get('div[class="single-products"]')
//       .its(productNumber - 1)
//       .within(() => {
//         cy.get(`a[data-product-id="${productNumber}"]`)
//           .contains("Add to cart")
//           .invoke("show")
//           .click();
//       });
//   });
// });
