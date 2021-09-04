const puppetRequest = require('./puppet');
require('jest-fetch-mock').enableMocks()

describe('testing api', () => {
  beforeEach(() => {
    fetch.resetMocks()
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))
  })

  it('calls google and returns data to me', () => {

    return puppetRequest('https://google.com').then(res => {
      expect(fetch.mock.calls.length).toEqual(1)
      expect(fetch.mock.calls[0][0]).toEqual('https://google.com')
    })
  })
})
