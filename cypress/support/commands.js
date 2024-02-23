Cypress.Commands.add('getDataQa', (dataQaSelector) => {
    return cy.get(`[data-qa="${dataQaSelector}"]`)
})