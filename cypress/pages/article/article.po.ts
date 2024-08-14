import { ArticleInfo } from "../../types/business.type";
import BasePage from "../basePage.po";

export class ArticlePage extends BasePage {
  webElements = {
    nameLbl: () => cy.get("[data-test='inventory-item-name']"),
    priceLbl: () => cy.get("[data-test='inventory-item-price']"),
    goToCartButton: () => cy.get("[data-test='shopping-cart-link']"),
    addToCartButton: () => cy.get("[data-test='add-to-cart']"),
  };

  constructor() {
    super();
  }

  goto(articleId: string) {
    return cy.visit(`/inventory-item.html?id=${articleId}`);
  }

  validateArticleInfo(articleInfo: ArticleInfo): void {
    cy.url().should("include", `/inventory-item.html?id=${articleInfo.id}`);
    this.webElements.priceLbl().should("have.text", articleInfo.price);
    this.webElements.nameLbl().should("have.text", articleInfo.name);
  }

  goToCart(): void {
    this.webElements.goToCartButton().click();
  }

  addToCart(): void {
    this.webElements.addToCartButton().click();
  }
}
