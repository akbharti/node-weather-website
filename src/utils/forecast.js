const request = require('request');


const forecast = (latitude, longitude, callback) => {

    const url = `http://api.weatherstack.com/current?access_key=c95a9f983dbdb6b39859668944c9ced9&query=${latitude},${longitude}`;

    request( {url , json:true} , (error , {body}) => { // response => {body}  // destructure object
    
        if(error) {
            callback('Unable to connect to weather service..', undefined);
        } else if( body.error){
             callback('Unable to find location. Try another search',undefined)
        }  else {

            callback(undefined, body.current.weather_descriptions[0] +'. Current temp. is '+ body.current.temperature + ' degree celsius out and there is ' + body.current.precip + '% chance of rain in ' +  body.location.name +', '+ body.location.country )
          }
    })
}

module.exports = forecast;
