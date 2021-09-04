const puppeteer = require('puppeteer');
class Foo {
  constructor(config) {
    this.config = config;
  }

  login() {
    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(config.url);
      await page.type('#ReduxFormInput1', config.username);
      await page.type('#ReduxFormInput2', config.password);
      await page.click('submit');
      await browser.close();
    })();
  }


}

module.exports = Foo;