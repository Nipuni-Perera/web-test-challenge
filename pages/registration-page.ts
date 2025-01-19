import { expect, Page } from "@playwright/test";
import * as dotenv from "dotenv";
import { Locators } from "../support/locators";

dotenv.config();

export class RegistrationPage {
  private page: Page;
  private registrationPageLocators = Locators.RegistrationPage;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToHomePage(): Promise<void> {
    await this.page.goto(
      process.env.BASE_URL || "https://my-stage.tractive.com"
    );
  }

  async isLoginFormVisible(): Promise<void> {
    const loginFormLocator = this.page.locator(this.registrationPageLocators.loginForm);
    await expect(loginFormLocator).toBeVisible();
  }

  async isCreateAccountLinkVisible(): Promise<void> {
    const createAccountLinkLocator = this.page.locator(this.registrationPageLocators.createAccountLink);
    await expect(createAccountLinkLocator).toBeVisible();
  }

  async clickOnCreateAccountLink(): Promise<void> {
    const createAccountLink = this.page.locator(this.registrationPageLocators.createAccountLinkText);
    await createAccountLink.click({ force: true });
  }

  async isFirstNameInputVisible(): Promise<void> {
    const firstNameLocator = this.page.locator(this.registrationPageLocators.firstNameInput);
    await expect(firstNameLocator).toBeVisible();
  }

  async clickOnFirstNameInput(firstName: string): Promise<void> {
    const firstNameInput = this.page.locator(this.registrationPageLocators.firstNameInput);
    await firstNameInput.fill(firstName);
  }

  async isLastNameInputVisible(): Promise<void> {
    const lastNameLocator = this.page.locator(this.registrationPageLocators.lastNameInput);
    await expect(lastNameLocator).toBeVisible();
  }

  async clickOnLastNameInput(lastName: string): Promise<void> {
    const lastNameInput = this.page.locator(this.registrationPageLocators.lastNameInput);
    await lastNameInput.fill(lastName);
  }

  async isEmailFieldVisible(): Promise<void> {
    const emailLocator = this.page.locator(this.registrationPageLocators.emailInput);
    await expect(emailLocator).toBeVisible();
  }

  async clickOnEmailInput(email: string): Promise<void> {
    const emailInput = this.page.locator(this.registrationPageLocators.emailInput);
    await emailInput.fill(email);
  }

  async isPasswordFieldVisible(): Promise<void> {
    const passwordLocator = this.page.locator(this.registrationPageLocators.passwordInput);
    await expect(passwordLocator).toBeVisible();
  }

  async clickOnPasswordInput(password: string): Promise<void> {
    const passwordInput = this.page.locator(this.registrationPageLocators.passwordInput);
    await passwordInput.fill(password);
  }

  async displayCreateAccountButton(): Promise<void> {
    const createAccountButton = this.page.locator(this.registrationPageLocators.createAccountButton);
    await expect(createAccountButton).toBeVisible();
  }

  async clickOnCreateAccountButton(): Promise<void> {
    const createAccountButton = this.page.locator(this.registrationPageLocators.createAccountButton);
    await createAccountButton.click();
  }

  async verifyRedirectionToANewPage(expectedUrl: string): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`.*${expectedUrl}`));
  }
}
