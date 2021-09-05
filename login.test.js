const Login = require('./login');
const config = require('./config');
const puppeteer = require('puppeteer');

describe('Login', () => {
  let browser;
  let page;
  let login;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false
    });
    page = await browser.newPage();
    login = new Login(page, config);
    await page.setDefaultNavigationTimeout(0);
  });

  afterAll(async () => {
    await browser.close();
  });

  test('submits', async () => {
    await login.login()
    return expect(page.url()).resolves.toBe('https://www.redbubble.com/explore/for-you')
  });
});
