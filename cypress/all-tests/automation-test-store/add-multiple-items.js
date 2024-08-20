/// <reference types="Cypress" />
import ContactUsPage from "../../page-object/contactUsPage";
import HomePage from "../../page-object/homePage";
import ProductDetailsPage from "../../page-object/productDetailsPage";
import { getRandomString, getRandomEmail } from "../../utils/helper";

describe("Add multiple items to basket", () => {
  before(function () {
    cy.fixture("products").then((data) => {
      cy.wrap(data).as("productNames");
    });
  });

  beforeEach(function () {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });

  it("Add specific item to basket", () => {
    cy.get("@productNames").then((productNames) => {
      productNames.productName.forEach((elm) => {
        cy.selectProduct(elm);
      });
    });
  });
});
