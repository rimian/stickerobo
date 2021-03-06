const puppeteer = require('puppeteer');

it('title', () => {
  return (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    res = await page.goto('https://example.com');
    title = await page.title()
    await browser.close();

    expect(title).toBe('Example Domain')
  })();
})

it('responds', () => {
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
})
