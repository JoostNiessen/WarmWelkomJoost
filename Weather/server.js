const express = require('express')
const bodyParser = require('body-parser');
const request = require('request');
const app = express()


const apiKey = 'a4c2ca6ff3c0d240489e371796186b02';


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs') 


app.get('/', function (req, res) {
  // NEW CODE
  res.render('index', {weather: null, error: null});
})


app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
})


app.listen(3000, function () {
  console.log('weather app listening on port 3000!')
})

