const APIRequest = require('./api');
require('jest-fetch-mock').enableMocks()

describe('testing api', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('calls google and returns data to me', async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))

    //assert on the response
    const res = await APIRequest('https://google.com')
    expect(res.data).toEqual('12345')

    //assert on the times called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1)
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com')
  })
})
