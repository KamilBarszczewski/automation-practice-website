Cypress.Commands.add("getDataQa", (dataQaSelector) => {
  return cy.get(`[data-qa="${dataQaSelector}"]`);
});

Cypress.Commands.add("getProduct", (productNumber) => {
  return cy.get(`[href="/product_details/${productNumber}"]`).click();
});

Cypress.Commands.add("getSubpage", (sub_page) => {
  return cy.get(`[href="/${sub_page}"]`);
});

// First product has number 3 on the list
Cypress.Commands.add("addToCart", (number) => {
  return cy
    .get(
      `:nth-child(${number}) > .product-image-wrapper > .single-products > .productinfo > .btn`
    )
    .click();
});

// Cypress.Commands.add("addToCartFromList", (productNumber) => {
//   return cy.get("div").within(() => {
//     cy.contains(`a[data-product-id="${productNumber}"]`).click();
//   });
// });
