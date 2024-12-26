import { Before, After } from "@cucumber/cucumber";
import { startBrowser } from "./browser";

Before(async () => {
  await startBrowser();
});
