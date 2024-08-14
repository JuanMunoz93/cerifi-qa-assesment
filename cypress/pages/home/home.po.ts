import BasePage from "../basePage.po";

export class HomePage extends BasePage {
  webElements = {
    itemCards: () => cy.get("img[data-test^='inventory-item-']"),
    itemLinks: () => cy.get("[data-test='inventory-item-name']"),
  };

  constructor() {
    super();
  }

  goto() {
    return cy.visit("/inventory.html");
  }

  /**
   * Opens a random item on the home page.
   *
   * This method gets all item cards, selects a random one from the list, and open clicks on it to open its article page.
   *
   * @returns {void}
   */
  openRandomItem(): void {
    this.webElements.itemCards().then(($elements) => {
      cy.wrap($elements[Cypress._.random(0, $elements.length - 1)]).click();
    });
  }

  /**
   * Opens an item by its name.
   *
   * This method searches for an item with the specified name and clicks on it to open its article page.
   *
   * @param {string} articleName - The name of the item to be opened.
   * @returns {void}
   */
  openItemByName(articleName: string): void {
    this.webElements.itemLinks().contains(articleName).click();
  }
}
