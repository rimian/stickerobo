
const fetchRequest = function(who) {
  return fetch(who).then(res => res.json())
}

module.exports = fetchRequest;

const puppetRequest = function(who) {
  return fetch(who).then(res => res.json())
}

module.exports = puppetRequest;