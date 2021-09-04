const fetchRequest = require('./puppet');
const puppetRequest = require('./puppet');
const puppeteer = require('puppeteer');

require('jest-fetch-mock').enableMocks()

describe('testing api', () => {
  beforeEach(() => {
    fetch.resetMocks()
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))
  })

  it('calls google and returns data to me', () => {
    return fetchRequest('https://google.com').then(json => {
      expect(json.data).toBe('12345')
      expect(fetch.mock.calls.length).toEqual(1)
      expect(fetch.mock.calls[0][0]).toEqual('https://google.com')
    })
  })

  it('calls google and returns data to me', () => {


    return (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.setRequestInterception(true);

      page.on('request', request => {
        request.respond({
          content: 'application/json',
          headers: {"Access-Control-Allow-Origin": "*"},
          body: JSON.stringify({foo: 'bar'})
        })
      });

      res = await page.goto('https://example.com');
      json = await res.json()
      await browser.close();

      expect(json).toStrictEqual({"foo": "bar"})
    })();


    //   const page = await browser.newPage();

    //   page.goto('https://google.com').then(res => res.json()).then(data => {
    //     expect(data).toBe(4)
    //   })



    // (async () => {
    //   const browser = await puppeteer.launch();
    //   const page = await browser.newPage();

    //   page.goto('https://google.com').then(res => res.json()).then(data => {
    //     expect(data).toBe(4)
    //   })
    //   // await page.screenshot({ path: 'example.png' });

    //   await browser.close();
    // })();

    // return puppetRequest('https://google.com').then(json => {
    //   expect(json.data).toBe('12345')
    //   expect(fetch.mock.calls.length).toEqual(1)
    //   expect(fetch.mock.calls[0][0]).toEqual('https://google.com')
    // })
  })
})
