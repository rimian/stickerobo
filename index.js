const config = require('./config');
const puppeteer = require('puppeteer-extra')
const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')

puppeteer.use(StealthPlugin())
puppeteer.use(RecaptchaPlugin(config.recaptcha))

const login = async (page) => {
  await page.goto(config.url);
  await page.type('#ReduxFormInput1', config.username)
  await page.type('#ReduxFormInput2', config.password)
  await page.click('.login-form button[type="submit"]');
  await page.solveRecaptchas()
  await page.waitForNavigation();
}

const upload = async (page) => {
  await page.goto('https://www.redbubble.com/portfolio/images/new')
  const elementHandle = await page.$('#select-image-single');
  await elementHandle.uploadFile('./hello-world.png');
  await page.waitForNavigation();
}

const submit = async (page) => {
  await page.$$eval('.disable-all', links => links.forEach(link => link.click()))
  await page.$eval('#work_title_en', el => el.value = 'hello world');
  await page.$eval('#work_tag_field_en', el => el.value = 'hello world');
  await page.$eval('#work_description_en', el => el.value = 'hello world');
  await page.click('#media_digital');
  await page.click('[data-type="sticker"] .enable-all');
  await page.click('#rightsDeclaration')
  await page.click('#work_safe_for_work_true');
  // #submit-work
};

puppeteer.launch({ headless: false }).then(async browser => {
  page = await browser.newPage();

  await page.setDefaultNavigationTimeout(0);

  await login(page).catch(e => console.log(e))
    .then(() => upload(page))
    .then(() => submit(page))
    .catch(err => console.log(err))

  // await page.screenshot({ path: 'result.png', fullPage: true })
  // await browser.close();
})
