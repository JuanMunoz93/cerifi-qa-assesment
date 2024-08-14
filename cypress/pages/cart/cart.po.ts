import { ArticleInfo } from "../../types/business.type";
import BasePage from "../basePage.po";

export class CartPage extends BasePage {
  webElements = {
    itemCards: () => cy.get("[data-test='inventory-item']"),
    nthItemQtyLbl: (pos) =>
      cy
        .get("[data-test='inventory-item']")
        .eq(pos)
        .get("[data-test='item-quantity'"),
    nthItemNameLbl: (pos) =>
      cy
        .get("[data-test='inventory-item']")
        .eq(pos)
        .get("[data-test='inventory-item-name'"),
    nthItemPriceLbl: (pos) =>
      this.webElements
        .itemCards()
        .eq(pos)
        .get("[data-test='inventory-item-price'"),
    goToCheckoutButton: () => cy.get("[data-test='checkout']"),
  };

  constructor() {
    super();
  }

  goto() {
    return cy.visit("/cart.html");
  }

  verifyOneItemInCart(testArticleInfo: ArticleInfo) {
    this.webElements.nthItemQtyLbl(0).should("have.text", "1");
    this.webElements
      .nthItemNameLbl(0)
      .should("have.text", testArticleInfo.name);
    this.webElements
      .nthItemPriceLbl(0)
      .should("have.text", testArticleInfo.price);
  }

  goToCheckout(): void {
    this.webElements.goToCheckoutButton().click();
  }
}
