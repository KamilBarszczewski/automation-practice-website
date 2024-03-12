/// <reference types="cypress" />

class ProductPage {
  get verifyProductName() {
    return cy.get(".product-information").within(() => {
      cy.get("h2").then((name) => {
        cy.contains(name.text());
      });
    });
  }

  get verifyProductCategory() {
    return cy.get(".product-information").within(() => {
      cy.get("p")
        .its(0)
        .then((text) => {
          cy.contains(text.text());
        });
    });
  }

  get verifyProductAvailability() {
    return cy.get(".product-information").within(() => {
      cy.get("p")
        .its(1)
        .then((text) => {
          cy.contains(text.text());
        });
    });
  }

  get verifyProductCondition() {
    return cy.get(".product-information").within(() => {
      cy.get("p")
        .its(2)
        .then((text) => {
          cy.contains(text.text());
        });
    });
  }

  get verifyProductBrand() {
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

  verifyProductDetails() {
    this.verifyProductName;
    this.verifyProductCategory;
    this.verifyProductAvailability;
    this.verifyProductCondition;
    this.verifyProductBrand;
  }

  searchProduct(productName) {
    this.inputSearch.clear().type(productName);
    this.btnSearch.click();
  }

  submitReview(name, email, message) {
    this.reviewName.clear().type(name);
    this.reviewEmail.clear().type(email);
    this.reviewMessage.clear().type(message);
    this.btnSubmit.click();
  }

  addToCartButton() {
    this.btnAddToCart.click();
  }
}

export default ProductPage;
