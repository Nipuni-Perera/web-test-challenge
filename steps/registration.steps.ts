import { Given, Then, When } from "@cucumber/cucumber";
import { startBrowser } from "../support/browser";
import { RegistrationPage } from "../pages/registration-page";

let registrationPage: RegistrationPage;

Given("I am on the homepage", async () => {
  const page = await startBrowser();
  registrationPage = new RegistrationPage(page);
  await registrationPage.navigateToHomePage();
});

Then("I should see the login form in the homepage", async function () {
  await registrationPage.isLoginFormVisible();
});

Then("I should see create account link", async function () {
  await registrationPage.isCreateAccountLinkVisible();
});

When("I click on create account link", async function () {
  await registrationPage.clickOnCreateAccountLink();
});

Then(
  "I should redirect to the sign up page with url contains {string}",
  async function (expectedUrl: string) {
    await registrationPage.verifyRedirectionToANewPage(expectedUrl);
  }
);

Then("I should see first name field", async function () {
  await registrationPage.isFirstNameInputVisible();
});

Then("I should see last name field", async function () {
  await registrationPage.isLastNameInputVisible();
});

Then("I should see email field input", async function () {
  await registrationPage.isEmailFieldVisible();
});

Then("I should see password field input", async function () {
  await registrationPage.isPasswordFieldVisible();
});

When(
  "I click on first name field and fill the first name with {string}",
  async function (firstName: string) {
    await registrationPage.clickOnFirstNameInput(firstName);
  }
);

When(
  "I click on last name field and fill the last name with {string}",
  async function (lastName: string) {
    await registrationPage.clickOnLastNameInput(lastName);
  }
);

When(
  "I click on email field and fill a non-registered email address with {string}",
  async function (email: string) {
    await registrationPage.clickOnEmailInput(email);
  }
);

When(
  "I click on password field and fill a non-registered password with {string}",
  async function (password: string) {
    await registrationPage.clickOnPasswordInput(password);
  }
);

Then("I should see create account button", async function () {
  await registrationPage.displayCreateAccountButton();
});

When("I click on create account button", async function () {
  await registrationPage.clickOnCreateAccountButton();
});

Then(
  "I should redirect to the activation page with url contains {string}",
  async function (expectedUrl: string) {
    await registrationPage.verifyRedirectionToANewPage(expectedUrl);
  }
);
