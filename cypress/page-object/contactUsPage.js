class contactUsPage {
  get firstNameInput() {
    return cy.get("#ContactUsFrm_first_name");
  }

  enterFirstName(value) {
    this.firstNameInput.type(value);
  }

  get emailInput() {
    return cy.get("#ContactUsFrm_email");
  }

  enterEmail(value) {
    this.emailInput.type(value);
  }

  get enquiryInput() {
    return cy.get("#ContactUsFrm_enquiry");
  }

  enterEnquiry(value) {
    this.enquiryInput.type(value);
  }

  get submitBtn() {
    return cy.get(".col-md-6 > .btn");
  }

  submitContactUs() {
    this.submitBtn.click();
    cy.screenshot("submit form");
  }

  get messageSuccessfully() {
    return cy.get(".mb40");
  }

  verifyContactUsMessage(productTitle) {
    this.messageSuccessfully.contains(`${productTitle}`).should("exist");
  }

  get iconThumbs() {
    return cy.get(".maintext i");
  }

  verifyThumbs() {
    this.iconThumbs.should("have.class", "fa-thumbs-up");
  }
}

export default new contactUsPage();
