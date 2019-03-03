const fetch = require('node-fetch');

module.exports = {
  get: suffix => console.log(`https://pokeapi.co/api/v2/${suffix}`) ||
    fetch(`https://pokeapi.co/api/v2/${suffix}`)
      .then(resp => resp.json())
}
