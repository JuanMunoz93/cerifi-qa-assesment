import BasePage from "../basePage.po";

export class LoginPage extends BasePage {
  webElements = {
    userInput: () => cy.get("[data-test='username']"),
    passwordInput: () => cy.get("[data-test='password']"),
    loginBtn: () => cy.get("[data-test='login-button']"),
  };

  constructor() {
    super();
  }

  goto() {
    return cy.visit("/");
  }

  login(
    user: string = Cypress.env("VALID_USER"),
    password: string = Cypress.env("PASSWORD"),
  ): void {
    this.webElements.userInput().type(user);
    this.webElements.passwordInput().type(password);
    this.webElements.loginBtn().click();
  }
}
