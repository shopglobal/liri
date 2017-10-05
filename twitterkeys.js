const chalk = require("chalk");
console.log(chalk.green('Twitter keys loaded'));
var Twitter = require('twitter');

var twitterKeys = new Twitter({
  consumer_key: 'JyQPJ2obBSXJ7JP7wrrXRFvUV',
  consumer_secret: 'x6kSqKzUpCoe6NtNVIp9VZwKlaPiBMuD0S34qZTlnsi2Sj8H8r',
  access_token_key: '912868833244991488-elpRxXlMRzJfR1ck3rfVMYt8iDC2bln',
  access_token_secret: 'JdjjClWUKvk58R1VJtwBLjbl81OITIJPSQmq7I8BxXyzn',
});

module.exports = twitterKeys;