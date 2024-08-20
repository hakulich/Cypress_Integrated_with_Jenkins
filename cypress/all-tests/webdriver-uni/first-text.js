/// <reference types="Cypress" />
describe("Test Contact Us form", () => {
  it("User should be able to submit form", () => {
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get("[name='first_name']").type("test");
    cy.get("[name='last_name']").type("test");
    cy.get("[name='email']").type("test");
    cy.get("[name='message']").type("test");
    cy.get("[type='submit']").click();
  });

  it("User should NOT be able to submit form without mandatory fields", () => {
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get("[name='first_name']").type("test");
    cy.get("[name='last_name']").type("test");
    cy.get("[name='message']").type("test");
    cy.get("[type='submit']").click();
  });
});
