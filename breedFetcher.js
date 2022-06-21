const request = require('request');
const argString = process.argv.slice(2);
let data;

request(`https://api.thecatapi.com/v1/breeds/search?q=${argString[0]}`, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  data = JSON.parse(body);
  output(data);
});

const output = function() {
  if (data === void 0) {
    console.log("Breed not found");
  } else {
    console.log(data[0]['description']);
  }
};