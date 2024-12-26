# Web Test Challenge
## Project Overview
I have successfully automated the registration and login functionality testing for the system at `https://my-stage.tractive.com` using TypeScript with the Playwright testing framework. The tests are structured following the **Page Object Model (POM)** architecture and include meaningful assertions to ensure robust validation.
## Project Structure
- **features/**: Contains Cucumber feature files.
  - `login.feature`: Feature file for login scenarios.
  - `registration.feature`: Feature file for registration scenarios.
- **pages/**: Contains page object models.
  - `login-page.ts`: Page object model for the login page.
  - `registration-page.ts`: Page object model for the registration page.
- **steps/**: Contains step definitions for Cucumber.
  - `login.steps.ts`: Step definitions for login feature.
  - `registration.steps.ts`: Step definitions for registration feature.
## Installation

### Prerequisites

- Node.js version 16.x is required to run this application.
- Ensure you have Node.js installed. You can download it from [Node.js Downloads](https://nodejs.org/).

#### Install Node.js Version 16 using nvm

The link provided (https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) contains instructions to install and update nvm, a tool that helps manage multiple versions of Node.js on a single machine. You can install nvm by following the steps in the README, which include running a shell script or using a package manager.

Install Node.js Version 16
```bash
nvm install 16
```

Use Node.js Version 16
```bash
nvm use 16
```

#### Install Required Browsers for Playwright
This command downloads and installs the browsers (e.g., Chromium, Firefox, WebKit) required by the Playwright testing framework.
```
npx playwright install
```

#### Setup

1. Clone the repository:
```bash
git clone https://github.com/Nipuni-Perera/web-test-challenge.git
```
2. Navigate to the project directory:
```bash
cd web-test-challenge
```
3. Install dependencies:
```bash
npm install
```
## Running Tests
To run the tests, use the following command:
- Login tests.
```bash
npx  cucumber-js  --tags  "@login"
```
- Registration tests.
```bash
npx  cucumber-js  --tags  "@register"
```
## Browser Configuration
The browser is configured in the `support/browser.ts` file. It uses environment variables to set up cookies and other configurations.
## Environment Variables
The following environment variables are used in the project:
- BASE_URL
- COOKIE_DOMAIN
- INTERVIEW_COOKIE_NAME
- INTERVIEW_COOKIE_VALUE
- DOMAIN_COOKIE_NAME
- DOMAIN_COOKIE_VALUE
- REGISTERED_EMAIL
- REGISTERED_PASSWORD
- NON_REGISTERED_EMAIL
- NON_REGISTERED_PASSWORD
 
These variables can be set in the `.env` file.
