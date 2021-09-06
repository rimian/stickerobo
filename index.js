const config = require('./config');
const puppeteer = require('puppeteer-extra')
const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')

puppeteer.use(StealthPlugin())
puppeteer.use(RecaptchaPlugin(config.recaptcha))

const login = async (page) => {
  await page.goto(config.url);
  await page.type('#ReduxFormInput1', config.username);
  await page.type('#ReduxFormInput2', config.password);
  await page.click('.login-form button[type="submit"]');
  await page.solveRecaptchas()
  await page.waitForNavigation();
}

puppeteer.launch({ headless: false }).then(async browser => {
  page = await browser.newPage();

  await login(page).catch(e => {
    console.log('Login error')
  });

  // await page.screenshot({ path: 'result.png', fullPage: true })
  // await browser.close();
})
