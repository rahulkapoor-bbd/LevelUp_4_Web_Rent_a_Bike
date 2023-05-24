const http = require('https');

function getWeatherInfo(city) {
  return new Promise((resolve, reject) => {
    const url = `https://wttr.in/${city}?format=1`;

    http.get(url, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        resolve(data.trim());
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

module.exports = {
    getWeatherInfo
  };