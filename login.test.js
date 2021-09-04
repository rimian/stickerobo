const Login = require('./login');
const config = require('./config');
const puppeteer = require('puppeteer');

describe('Login', () => {
  let browser;
  let page;
  let login;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    login = new Login(page, config);
  });

  afterAll(() => {
    browser.close();
  });

  test('should be doing something', () => {
    expect(true).toBe(true)
  });
});
