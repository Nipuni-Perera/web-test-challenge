import { chromium, Browser, BrowserContext, Page } from "playwright";

import * as dotenv from "dotenv";

dotenv.config();

let browser: Browser;
let context: BrowserContext;
let page: Page;

const interviewCookie = {
  name: process.env.INTERVIEW_COOKIE_NAME || "interview",
  value: process.env.INTERVIEW_COOKIE_VALUE || "abcd",
  domain: process.env.COOKIE_DOMAIN || "my-stage.tractive.com",
  path: "/",
  httpOnly: false,
  secure: true,
};

const domainCookie = {
  name: process.env.DOMAIN_COOKIE_NAME || "domain",
  value: process.env.DOMAIN_COOKIE_VALUE || ".tractive.com",
  domain: process.env.COOKIE_DOMAIN || "my-stage.tractive.com",
  path: "/",
  httpOnly: false,
  secure: true,
};

export const startBrowser = async () => {
  if (!browser) {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    await context.addCookies([interviewCookie, domainCookie]);
  }
  return page;
};

export const getPage = () => {
  return page;
};
