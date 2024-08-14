import BasePage from "../basePage.po";

export class CheckoutCompletePage extends BasePage{
    webElements = {
      checkImg: () => cy.get("[data-test='pony-express']"),
      completeLbl: () => cy.get("[data-test='complete-header']")
    }

    constructor() {
        super();
      }

  goto() {
    return cy.visit('/checkout-complete.html');
  }

  verifyPurchaseIsComplete(){ 
    this.webElements.checkImg().should('be.visible');
    this.webElements.completeLbl().should('have.text','Thank you for your order!');
  }
}