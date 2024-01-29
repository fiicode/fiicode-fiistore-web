const url =
  process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1:3333'
    : 'https://api.fiicode.com:3333';

const url2 = 'https://5.183.11.176:3333';

module.exports = { url, url2 };
