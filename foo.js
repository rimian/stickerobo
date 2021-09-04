const puppeteer = require('puppeteer');
class Foo {
  constructor(config) {
    this.config = config;
  }

  login() {
    return (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto(this.config.url);
      await page.type('#ReduxFormInput1', this.config.username);
      await page.type('#ReduxFormInput2', this.config.password);
      await page.click('button');

      browser.close()

      return page;
    })();
  }
}

module.exports = Foo;