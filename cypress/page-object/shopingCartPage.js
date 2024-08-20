class shopingCartPage {
  get productNameLabel() {
    return cy.get(".product-list td");
  }

  verifyProductName(value) {
    this.cartIcon.contains(value).should("exist");
  }

  get totalPriceLabel() {
    return cy.get(".total");
  }

  verifyTotalPrice(value) {
    this.totalPriceLabel.contains(value).should("exist");
  }
}

export default new shopingCartPage();
