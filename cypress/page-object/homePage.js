class contactUsPage {
  open() {
    cy.visit(`${Cypress.env("automationTestStore")}`);
  }

  get cartIcon() {
    return cy.get("#menu_cart");
  }

  openProductCartPage() {
    this.cartIcon.click();
  }

  get contactUsLink() {
    return cy.get(".info_links_footer > :nth-child(5) > a");
  }

  clickContactUsLink() {
    this.contactUsLink.click();
  }

  get productByName() {
    return cy.get(".block_frame_featured .prdocutname");
  }

  openProductDetails(name) {
    this.productByName.contains(name).click();
  }
}

export default new contactUsPage();
