

let apiKey = 'a4c2ca6ff3c0d240489e371796186b02';
let city = 'Sittard';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;





const request = require('request');
request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
	let weather = JSON.parse(body)
	let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
	let message2 = `The humidity in ${weather.name} is ${weather.main.humidity}%`
	console.log(body);
	
	console.log(message);
	console.log(message2);
  }
});


