// /// <reference types="cypress" />
// //const url = "https://automationexercise.com/api/productsList";

// describe("GET automationexercise return 200", () => {
//   it("response product list", () => {
//     cy.request("/api/productsList").its("status").should("eq", 200);
//   });

//   it("display product list", () => {
//     cy.request("/api/productsList").as("allProducts");

//     cy.get("@allProducts").then((response) => {
//       cy.log(JSON.stringify(response.body));
//     });
//   });

//   it("display brand list", () => {
//     cy.request("/api/brandsList").as("allBrands");

//     cy.get("@allBrands").then((response) => {
//       cy.log(JSON.stringify(response.body));
//     });
//   });
// });
