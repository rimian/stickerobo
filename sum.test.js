const Foo = require('./sum');
const config = require('./config');

describe('Foo', () => {
  beforeAll(() => {

  });

  it('should be', () => {
    const foo = new Foo(config);
    foo.login();

  });
});
