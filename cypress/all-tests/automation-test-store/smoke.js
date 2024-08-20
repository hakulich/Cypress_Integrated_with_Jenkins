/// <reference types="Cypress" />
import ContactUsPage from "../../page-object/contactUsPage";
import HomePage from "../../page-object/homePage";
import ProductDetailsPage from "../../page-object/productDetailsPage";
import { getRandomString, getRandomEmail } from "../../utils/helper";

//run in cmd: npx cypress run --spec "cypress/all-tests/automation-test-store/smoke.js"
describe("Smoke Test for Automation Test Store", () => {
  it("User should be able to submit Contact US form", () => {
    let contactUsData = {
      firstName: getRandomString(5),
      email: getRandomEmail(),
      enquiry: getRandomString(15),
    };

    cy.log("GIVEN User is at Main Page");
    HomePage.open();
    cy.log("AND User clicks on Contact Us link");
    HomePage.clickContactUsLink();
    cy.log("AND User enters First Name");
    ContactUsPage.enterFirstName(contactUsData.firstName);
    cy.log("AND User enters Email");
    ContactUsPage.enterEmail(contactUsData.email);
    cy.log("AND User enters Enquiry");
    ContactUsPage.enterEnquiry(contactUsData.enquiry);
    cy.log("AND User clicks on Send button");
    ContactUsPage.submitContactUs();
    cy.log("THEN Successfully message is displayed");
    ContactUsPage.verifyContactUsMessage("Your enquiry has been successfully sent to the store owner!");
    cy.log("AND Thumbs icon is displayed");
    ContactUsPage.verifyThumbs();
  });

  it("User should be able to add product to cart", () => {
    const product = {
      productName: "Skinsheen Bronzer Stick",
      model: "558003",
      unitPrice: "$29.50",
      description: "Bronzes, shapes and sculpts the face. Sheer-to-medium buildable coverage that looks naturally radiant and sunny. Stashable - and with its M·A·C Surf, Baby look – way cool. Limited edition.",
    };

    cy.log("GIVEN User is at Main Page");
    HomePage.open();
    cy.log(`AND User opens details for ${product.productName} product`);
    HomePage.openProductDetails(product.productName);
    cy.log(`THEN Product Name is ${product.productName}`);
    ProductDetailsPage.verifyProductName(product.productName);
    cy.log(`THEN Product Price is ${product.unitPrice}`);
    ProductDetailsPage.verifyProductPrice(product.unitPrice);
    cy.log(`THEN Product Model is ${product.model}`);
    ProductDetailsPage.verifyProductModel(product.model);
    cy.log(`THEN Product Description is ${product.description}`);
    ProductDetailsPage.verifyProductDescription(product.description);

    cy.log(`WHEN User adds ${product.productName} product to cart`);
    ProductDetailsPage.addProductToCart();
  });
});
