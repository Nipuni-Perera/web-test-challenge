import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    baseURL: "https://my-stage.tractive.com",
    headless: false,
  },
});
