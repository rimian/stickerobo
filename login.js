
class Login {
  constructor(page, config) {
    this.page = page;
    this.config = config;
  }

  login() {
    return (async () => {
      await this.page.goto(this.config.url);
      await this.page.type('#ReduxFormInput1', this.config.username);
      await this.page.type('#ReduxFormInput2', this.config.password);
      await this.page.click('button');
    })();
  }
}

module.exports = Login;