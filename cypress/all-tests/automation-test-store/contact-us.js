/// <reference types="Cypress" />
describe("Test Contact Us form", () => {
  it("User should be able to submit form", () => {
    //cy.viewport(550, 750);
    cy.visit("https://www.automationteststore.com/");
    cy.get(".info_links_footer > :nth-child(5) > a").click();
    cy.get("#ContactUsFrm_first_name").type("test");
    cy.get("#ContactUsFrm_email").type("test@text.com");
    cy.get("#ContactUsFrm_enquiry").type("test");
    cy.get(".col-md-6 > .btn").click();
  });
});
