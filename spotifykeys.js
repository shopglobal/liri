const chalk = require("chalk");
console.log(chalk.green('Spotify keys loaded'));

var Spotify = require('node-spotify-api');
var spotifyKeys = new Spotify({
  id: '6efecb35f43b4d9cb327658373d85422',
  secret: '3fd0f14a7f454af4888311b0a7689167',
});


module.exports = spotifyKeys;