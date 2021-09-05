
class Login {
  constructor(page, config) {
    this.page = page;
    this.config = config;
  }

  login() {
    const page = this.page;

    return (async () => {
      await page.goto(this.config.url);
      await page.type('#ReduxFormInput1', this.config.username);
      await page.type('#ReduxFormInput2', this.config.password);
      await page.click('button[type="submit"]');
      await page.waitForNavigation();
    })();
  }
}

module.exports = Login;