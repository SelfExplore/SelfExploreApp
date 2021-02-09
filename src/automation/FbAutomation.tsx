import { BrowserWindow, app } from 'electron';
import pie from 'puppeteer-in-electron';
import puppeteer from 'puppeteer-core';

const FbAutomation = async () => {
  await pie.initialize(app);
  const browser = await pie.connect(app, puppeteer);
  const window = new BrowserWindow();
  const url = 'https://example.com/';
  await window.loadURL(url);
  const page = await pie.getPage(browser, window);
  console.log(page.url());
  window.destroy();
  // const browser = await puppeteer.launch();
  // const page = await browser.newPage();
  // await page.goto('https://facebook.com');
  // await page.click('[title=Trending]');
  // await page.type('#email', 'RoyerAdames');
  // await page.type('#pass', 'T');
  // await Promise.all([
  //   page.waitForNavigation(),
  //   page.click('button[type=submit]'),
  // ]);
  // // await page.screenshot({ path: 'screenshot.png' });

  // await browser.close();
};

export default FbAutomation;
