const puppeteer = require('puppeteer');
class Foo {
  constructor(config) {
    this.config = config;
  }

  login() {
    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      try {
        await page.goto(this.config.url);
        await page.type('#ReduxFormInput1', this.config.username);
        await page.type('#ReduxFormInput2', this.config.password);
        await page.click('submit');
        await browser.close();
      } catch(e) {
        await browser.close();
      }


    })();

    return true;
  }
}

module.exports = Foo;