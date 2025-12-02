// Create a new router
const express = require("express")
const router = express.Router()
const request = require('request');
require('dotenv').config()

// Set API key
let apiKey = process.env.API_KEY

router.get('/',function(req, res, next){
    res.render('inputweather.ejs')
});

router.get('/now', (req, res, next) => {
    let city = req.query.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    request(url, function (err, response, body) { 
        var weather = JSON.parse(body)

        if (weather!==undefined && weather.main!==undefined) {
            var wmsg = 'It is '+ weather.main.temp + 
            ' degrees in '+ weather.name +
            '! <br> The humidity now is: ' + 
            weather.main.humidity;
            
            res.send (wmsg);
        } else {
            res.send ("No data found");
        }
    });
});

module.exports = router;