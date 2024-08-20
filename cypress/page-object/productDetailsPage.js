class productDetailsPage {
  get productNameLabel() {
    return cy.get(".bgnone");
  }

  verifyProductName(productTitle) {
    this.productNameLabel.contains(productTitle).should("exist");
  }

  get productPriceLabel() {
    return cy.get(".productfilneprice");
  }

  verifyProductPrice(productPrice) {
    this.productPriceLabel.contains(productPrice).should("exist");
  }

  get productDescriptionLabel() {
    return cy.get("#description p");
  }

  verifyProductDescription(productDescription) {
    this.productDescriptionLabel.contains(productDescription).should("exist");
  }

  get productModelLabel() {
    return cy.get(".productinfoleft").parent();
  }

  verifyProductModel(productModel) {
    this.productModelLabel.contains(productModel).should("exist");
  }

  get addToCartBtn() {
    return cy.get(".productpagecart");
  }

  addProductToCart() {
    this.addToCartBtn.click();
  }
}

export default new productDetailsPage();
