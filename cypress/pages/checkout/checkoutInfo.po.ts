import { UserInfo } from "../../types/business.type";
import BasePage from "../basePage.po";

export class CheckoutInfoPage extends BasePage{
    webElements = {
        firstNameInput: () => cy.get("[data-test='firstName']"),
        lastNameInput: () => cy.get("[data-test='lastName']"),
        postalCodeInput: () => cy.get("[data-test='postalCode']"),
        continueBtn: () => cy.get("[data-test='continue']")
    }

    constructor() {
        super();
      }

  goto() {
    return cy.visit('/checkout-step-one.html');
  }


  fillUserInfoAndContinue(userInfo:UserInfo){ 
    this.webElements.firstNameInput().type(userInfo.firstName);
    this.webElements.lastNameInput().type(userInfo.lastName);
    this.webElements.postalCodeInput().type(userInfo.postalCode);
    this.webElements.continueBtn().click();
  }
  
}