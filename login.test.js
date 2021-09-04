const Login = require('./login');
const config = require('./config');
const puppeteer = require('puppeteer');

describe('Login', () => {
  let browser;
  let page;
  let login;

  jest.setTimeout(10000)

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    login = new Login(page, config);
  });

  afterAll(async () => {
    await browser.close();
  });

  test('submits', async () => {
    await login.login()
    return expect(page.title()).resolves.toBe('All Departments | Redbubble')
  });
});
