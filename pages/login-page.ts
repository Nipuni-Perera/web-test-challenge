import { expect, Page } from "@playwright/test";

import * as dotenv from "dotenv";

dotenv.config();

export class LoginPage {
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

  async isEmailFieldVisible(): Promise<void> {
    const emailLocator = this.page.locator('input[type="email"]');
    await expect(emailLocator).toBeVisible();
  }

  async isPasswordFieldVisible(): Promise<void> {
    const passwordLocator = this.page.locator('input[type="password"]');
    await expect(passwordLocator).toBeVisible();
  }

  async clickOnEmailInput(email: string): Promise<void> {
    const emailInput = this.page.locator('input[type="email"]');
    await emailInput.waitFor({ state: "visible" });
    await emailInput.fill(email);
  }

  async clickOnPasswordInput(password: string): Promise<void> {
    const passwordInput = this.page.locator('input[type="password"]');
    await passwordInput.waitFor({ state: "visible" });
    await passwordInput.fill(password);
  }

  async displaySignInButton(): Promise<void> {
    const signInButton = this.page.locator('button[type="submit"]');
    await signInButton.waitFor({ state: "visible" });
    await expect(signInButton).toBeVisible();
  }

  async clickOnSignInButton(): Promise<void> {
    const signInButton = this.page.locator('button[type="submit"]');
    await signInButton.waitFor({ state: "visible" });
    await signInButton.click({ force: true });
  }

  async verifyRedirectToSettingsPage(expectedUrl: string): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`.*${expectedUrl}`));
  }
}
