import { expect, Page } from "@playwright/test";

import * as dotenv from "dotenv";

dotenv.config();

export class RegistrationPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToHomePage(): Promise<void> {
    await this.page.goto(
      process.env.BASE_URL || "https://my-stage.tractive.com"
    );
  }

  async isLoginFormVisible(): Promise<void> {
    const loginFormLocator = this.page.locator('[name="loginForm"]');
    await expect(loginFormLocator).toBeVisible();
  }

  async isCreateAccountLinkVisible(): Promise<void> {
    const loginFormLocator = this.page.locator('a[href="#/signup"]');
    await expect(loginFormLocator).toBeVisible();
  }

  async isFirstNameInputVisible(): Promise<void> {
    const firstNameLocator = this.page.locator('[name="firstName"]');
    await expect(firstNameLocator).toBeVisible();
  }

  async isLastNameInputVisible(): Promise<void> {
    const lastNameLocator = this.page.locator('[name="lastName"]');
    await expect(lastNameLocator).toBeVisible();
  }

  async isEmailFieldVisible(): Promise<void> {
    const emailLocator = this.page.locator('[name="email"]');
    await expect(emailLocator).toBeVisible();
  }

  async isPasswordFieldVisible(): Promise<void> {
    const passwordLocator = this.page.locator('input[type="password"]');
    await expect(passwordLocator).toBeVisible();
  }

  async clickOnCreateAccountLink(): Promise<void> {
    const createAccountLink = this.page.locator("text=Create Account");
    await createAccountLink.click({ force: true });
  }

  async clickOnFirstNameInput(firstName: string): Promise<void> {
    const firstNameInput = this.page.locator('[name="firstName"]');
    await firstNameInput.waitFor({ state: "visible" });
    await firstNameInput.fill(firstName);
  }

  async clickOnLastNameInput(lastName: string): Promise<void> {
    const lastNameInput = this.page.locator('[name="lastName"]');
    await lastNameInput.waitFor({ state: "visible" });
    await lastNameInput.fill(lastName);
  }

  async clickOnEmailInput(email: string): Promise<void> {
    const emailInput = this.page.locator('[name="email"]');
    await emailInput.waitFor({ state: "visible" });
    await emailInput.fill(email);
  }

  async clickOnPasswordInput(password: string): Promise<void> {
    const passwordInput = this.page.locator('input[type="password"]');
    await passwordInput.waitFor({ state: "visible" });
    await passwordInput.fill(password);
  }

  async displayCreateAccountButton(): Promise<void> {
    const createAccountButton = this.page.locator('button[type="submit"]');
    await createAccountButton.waitFor({ state: "visible" });
    await expect(createAccountButton).toBeVisible();
  }

  async clickOnCreateAccountButton(): Promise<void> {
    const createAccountButton = this.page.locator('button[type="submit"]');

    await createAccountButton.waitFor({ state: "visible" });
    await this.page.waitForFunction((selector) => {
      const button = document.querySelector(selector) as HTMLButtonElement;
      return button && !button.disabled;
    }, 'button[type="submit"]');

    expect(await createAccountButton.isVisible()).toBeTruthy();
    expect(await createAccountButton.isEnabled()).toBeTruthy();

    await createAccountButton.click();
  }

  async verifyRedirectionToANewPage(expectedUrl: string): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`.*${expectedUrl}`));
  }
}
