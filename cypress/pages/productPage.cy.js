/// <reference types="cypress" />

class ProductPage {
  get productName() {
    return cy.get(".product-information").within(() => {
      cy.get("h2").then((name) => {
        cy.contains(name.text());
      });
    });
  }

  get productCategory() {
    return cy.get(".product-information").within(() => {
      cy.get("p")
        .its(0)
        .then((text) => {
          cy.contains(text.text());
        });
    });
  }

  get productAvailability() {
    return cy.get(".product-information").within(() => {
      cy.get("p")
        .its(1)
        .then((text) => {
          cy.contains(text.text());
        });
    });
  }

  get productCondition() {
    return cy.get(".product-information").within(() => {
      cy.get("p")
        .its(2)
        .then((text) => {
          cy.contains(text.text());
        });
    });
  }

  get productBrand() {
    return cy.get(".product-information").within(() => {
      cy.get("p")
        .its(3)
        .then((text) => {
          cy.contains(text.text());
        });
    });
  }

  get inputSearch() {
    return cy.get("#search_product");
  }

  get btnSearch() {
    return cy.get("#submit_search");
  }

  get btnAddToCart() {
    return cy.get('button[type="button"]').within(() => {
      cy.contains("Add to cart");
    });
  }

  get reviewName() {
    return cy.get("#name");
  }

  get reviewEmail() {
    return cy.get("#email");
  }

  get reviewMessage() {
    return cy.get("#review");
  }

  get btnSubmit() {
    return cy.get("#button-review");
  }

  getProductDetails() {
    this.productName;
    this.productCategory;
    this.productAvailability;
    this.productCondition;
    this.productBrand;
  }

  searchProduct(productName) {
    cy.contains("h2", "All Products").should("exist");
    this.inputSearch.clear().type(productName);
    this.btnSearch.click();
    cy.contains("h2", "Searched Products").should("exist");
  }

  writeReview(name, email, message) {
    cy.contains("a", "Write Your Review").should("be.visible");
    this.reviewName.clear().type(name);
    this.reviewEmail.clear().type(email);
    this.reviewMessage.clear().type(message);
    this.btnSubmit.click();
    cy.contains("span", "Thank you for your review.").should("be.visible");
  }

  buttonAddToCart() {
    this.btnAddToCart.click();
  }
}

export default ProductPage;
