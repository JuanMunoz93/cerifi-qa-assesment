
export type PageOptions = {
    timeout?: number;
    waitForActions?: Promise<any> | Promise<any>[];
  };

  export default abstract class BasePage {
    constructor(
        public options: PageOptions = { timeout: 15000 }
      ) {}
      
    abstract goto(...args): Cypress.Chainable<Cypress.AUTWindow>;
  }