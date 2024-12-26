import { Given, Then, When } from "@cucumber/cucumber";
import { startBrowser } from "../support/browser";
import { LoginPage } from "../pages/login-page";

import * as dotenv from "dotenv";
dotenv.config();

let loginPage: LoginPage;

Given("I open the homepage", async () => {
  const page = await startBrowser();
  loginPage = new LoginPage(page);
  await loginPage.navigateToHomePage();
});

Then("I should see the login form", async function () {
  await loginPage.isLoginFormVisible();
});

Then("I should see email field", async function () {
  await loginPage.isEmailFieldVisible();
});

Then("I should see password field", async function () {
  await loginPage.isPasswordFieldVisible();
});

When(
  "I click on email field and fill the registered email address {string}",
  async function (email: string) {
    const emailValue = process.env.REGISTERED_EMAIL || email;
    await loginPage.clickOnEmailInput(emailValue);
  }
);

When(
  "I click on password field and fill the registered password {string}",
  async function (password: string) {
    const passwordValue = process.env.REGISTERED_PASSWORD || password;
    await loginPage.clickOnPasswordInput(passwordValue);
  }
);

Then("I should see sign in button", async function () {
  await loginPage.displaySignInButton();
});

When("I click on signin button", async function () {
  await loginPage.clickOnSignInButton();
});

Then(
  "I should redirect to the settings page with url contains {string}",
  async function (expectedUrl: string) {
    await loginPage.verifyRedirectToSettingsPage(expectedUrl);
  }
);
