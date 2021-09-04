
const APIRequest = function(who) {
  return fetch(who).then(res => res.json())
}

module.exports = APIRequest;