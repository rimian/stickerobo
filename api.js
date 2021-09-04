
const APIRequest = function(who) {
  return fetch('https://google.com').then(res => res.json())
}

module.exports = APIRequest;