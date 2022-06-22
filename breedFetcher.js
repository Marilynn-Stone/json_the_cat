const request = require('request');
const argString = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${argString[0]}`, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    return;
  }
  console.log('statusCode:', response && response.statusCode);
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Breed not found");
    return;
  }
  console.log(data[0].description);
});