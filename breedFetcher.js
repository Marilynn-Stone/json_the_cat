const request = require('request');
const argString = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${argString[0]}`, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  const data = JSON.parse(body);
  console.log(data[0]['description']);
});