/// <reference types="cypress" />

class Products {
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

  get product1st() {
    return cy.get('a[data-product-id="1"]').contains("Add to cart");
  }

  get product2nd() {
    return cy.get('a[data-product-id="2"]').contains("Add to cart");
  }

  get jeans1() {
    return cy.get('a[data-product-id="33"]').contains("Add to cart");
  }

  get jeans2() {
    return cy.get('a[data-product-id="35"]').contains("Add to cart");
  }

  get jeans3() {
    return cy.get('a[data-product-id="37"]').contains("Add to cart");
  }

  get btnAddToCart() {
    return cy.get('button[type="button"]').within(() => {
      cy.contains("Add to cart");
    });
  }

  get detailProduct1() {
    return cy.get('a[href="/product_details/1"]').contains("View Product");
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

  get1Product() {
    this.product.click();
  }

  getFirstProduct() {
    this.product1st.click();
  }

  getSecondProduct() {
    this.product2nd.click();
  }

  getJeans1() {
    cy.contains("p", "Soft Stretch Jeans").should("be.visible");
    this.jeans1.click();
  }

  getJeans2() {
    cy.contains("p", "Regular Fit Straight Jeans").should("be.visible");
    this.jeans2.click();
  }

  getJeans3() {
    cy.contains("p", "Grunt Blue Slim Fit Jeans").should("be.visible");
    this.jeans3.click();
  }

  verifyAllJeans() {
    cy.contains("a", "Soft Stretch Jeans").should("be.visible");
    cy.contains("a", "Regular Fit Straight Jeans").should("be.visible");
    cy.contains("a", "Grunt Blue Slim Fit Jeans").should("be.visible");
  }

  getDetailProduct1() {
    cy.contains("p", "Blue Top").should("be.visible");
    this.detailProduct1.click();
  }

  buttonAddToCart() {
    this.btnAddToCart.click();
  }
}

export default Products;
