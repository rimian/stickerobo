const Foo = require('./sum');
const config = require('./config');

describe('Google', () => {
  beforeAll(async () => {
    await page.goto(config.url);
  });

  it('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Log In | Redbubble');
  });
});
