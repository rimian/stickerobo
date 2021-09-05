const config = require('./config');
const puppeteer = require('puppeteer-extra')
const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha')

let browser;
let page;

(async () => {
  await puppeteer.use(RecaptchaPlugin(config.recaptcha))

  browser = await puppeteer.launch({ headless: false });
  page = await browser.newPage();

  await page.goto(config.url);
  await page.type('#ReduxFormInput1', config.username);
  await page.type('#ReduxFormInput2', config.password);
  await page.click('.login-form button[type="submit"]');
  await page.solveRecaptchas();
  await page.click('#recaptcha-verify-button');
  await page.waitForNavigation();

})();
