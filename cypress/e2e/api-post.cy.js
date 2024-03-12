// /// <reference types="cypress" />
// //const url = "https://automationexercise.com/api/";

// describe("automationexercise", () => {
//   const request = {
//     url: "/api/searchProduct",
//     qs: {
//       key: "value",
//     },
//     failOnStatusCode: false,
//   };

//   it("response", () => {
//     cy.request(request).then((response) => {
//       const currentArgs = response.body;
//     });
//   });
// });

// describe("POST automationexercise", () => {
//   it("POST to search product", () => {
//     cy.request({
//       url: "https://automationexercise.com/api/searchProduct",
//       method: "POST",
//       qs: { search_product: "top" },
//     }).as("searchProduct");

//     cy.get("@searchProduct").its("status").should("equal", 200);
//     cy.get("@searchProduct").then((response) => {
//       cy.log(JSON.stringify(response.body));
//     });
//   });

//   it.skip("verify login with valid details", () => {
//     cy.request({
//       url: "/api/verifyLogin",
//       method: "POST",
//       body: {
//         username: "tescik@test.ts",
//         password: "testowy@",
//       },
//     }).as("loginUser");

//     cy.get("@loginUser").its("status").should("equal", 200);
//     cy.get("@loginUser").then((response) => {
//       cy.log(JSON.stringify(response.body));
//     });
//   });
// });
