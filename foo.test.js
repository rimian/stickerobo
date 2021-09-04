const Foo = require('./foo');
const config = require('./config');

describe('Foo', () => {
  const foo = new Foo(config);

  test('should be doing something', async () => {
    return expect(foo.login()).resolves.toBeTruthy();
  });
});
