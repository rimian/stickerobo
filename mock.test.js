
// OtherModule.test.js
jest.mock('./SomeClass'); // this happens automatically with automocking
const SomeClass = require('./SomeClass');

describe('dunno', () => {
  test('what', () => {

    const mMock = jest.fn().mockImplementation(() => 42);
    SomeClass.mockImplementation(() => {
      return {
        m: mMock,
      };
    });

    const some = new SomeClass();

    expect(some.m('a', 'b')).toBe(42)

    // console.log('Calls to m: ', mMock.mock.calls);
  });
});
