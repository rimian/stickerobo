const config = require('./config');
const puppeteer = require('puppeteer-extra')
const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')

puppeteer.use(StealthPlugin())
puppeteer.use(RecaptchaPlugin(config.recaptcha))

puppeteer.launch({ headless: false }).then(async browser => {
  page = await browser.newPage();

  // await page.setDefaultNavigationTimeout(0);

  await page.goto(config.url);
  await page.type('#ReduxFormInput1', config.username);
  await page.type('#ReduxFormInput2', config.password);
  await page.click('.login-form button[type="submit"]');

  const { captchas, solutions, solved, error } = await page.solveRecaptchas()

  console.log(captchas)
  console.log(solutions)
  console.log(solved)
  console.log(error)

  await page.waitForNavigation();
  await page.screenshot({ path: 'result.png', fullPage: true })
  await browser.close();
})
