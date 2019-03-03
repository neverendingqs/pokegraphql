const fetch = require('node-fetch');

module.exports = {
  get: suffix =>
    fetch(`https://pokeapi.co/api/v2/${suffix}`)
      .then(resp => resp.json())
}
