const Foo = require('./foo');
const config = require('./config');

describe('Foo', () => {
  beforeAll(() => {

  });

  it('should be', () => {
    const foo =new Foo(config);
    expect(foo.login()).toBeTruthy();
  });
});
