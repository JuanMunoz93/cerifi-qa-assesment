import BasePage from "../basePage.po";

export class HomePage extends BasePage{
    webElements = {
        itemCards: () => cy.get("img[data-test^='inventory-item-']"),
        itemLinks: () => cy.get("[data-test='inventory-item-name']"),
    }

    constructor() {
        super();
      }

  goto() {
    return cy.visit('/inventory.html')
  }

  openRandomItem():void{
    this.webElements.itemCards().then(($elements) => {       
        cy.wrap($elements[Cypress._.random(0, $elements.length-1)]).click();
      });
  }

  openItemByName(articleName:string):void{
    this.webElements.itemLinks().contains(articleName).click();
  }

}