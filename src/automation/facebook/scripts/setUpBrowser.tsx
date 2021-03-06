require('dotenv').config();
import { chromium } from 'playwright';

const documentsPath = window.process.argv.slice(-1)[0];

async function setUpBrower(storageState:string = process.env.STORAGE || "null") {
  /* start headless browser with credentials */
  const browser = await chromium.launch({
    args: [
      '--start-maximized',
      '--disable-notifications',
      '--disable-extensions',
      '--mute-audio',
    ],
    defaultViewport: null,
    devtools: true,
    slowMo: 100,
    downloadsPath: `${documentsPath}/your_data/facebook`,
  });
  // Create a new incognito browser context with user credentials
  const context = await browser.newContext({
    acceptDownloads: true,
    viewport: null,
    storageState: JSON.parse(storageState),
  });
  return [browser, context];
}
export default setUpBrower;
