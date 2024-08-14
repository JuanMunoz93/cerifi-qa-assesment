import { ArticleInfo } from "../../types/business.type";
import BasePage from "../basePage.po";

export class CheckoutOverviewPage extends BasePage{
    webElements = {
      itemCards: () => cy.get("[data-test='inventory-item']"),
      nthItemQtyLbl: (pos) => this.webElements.itemCards().eq(pos).get("[data-test='item-quantity'"),
      nthItemNameLbl: (pos) => this.webElements.itemCards().eq(pos).get("[data-test='inventory-item-name'"),
      nthItemPriceLbl: (pos) => this.webElements.itemCards().eq(pos).get("[data-test='inventory-item-price'"),
      finishBtn: () => cy.get("[data-test='finish']")
    }

    constructor() {
        super();
      }

  goto() {
    return cy.visit('/checkout-step-two.html');
  }


  
  verifyOneItemInCheckout(testArticleInfo:ArticleInfo){ 
    this.webElements.nthItemQtyLbl(0).should('have.text', "1");
    this.webElements.nthItemNameLbl(0).should('have.text', testArticleInfo.name);
    this.webElements.nthItemPriceLbl(0).should('have.text', testArticleInfo.price);
  }
 
  finishPurchase(){ 
    this.webElements.finishBtn().click();
  }
}