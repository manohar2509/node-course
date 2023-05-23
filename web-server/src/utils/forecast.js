const request = require('request')
const forecast = (latitude,longitude, callback) => {
        const url = 'http://api.weatherstack.com/current?access_key=9d691efb06236e78abf8f62d71878942&query='+latitude+','+longitude+'&units=f'
        request({url:url, json:true},(error,response)=>{
            if(error){
                callback("Unable to connect to the weather services",undefined);
            }
            else if(response.body.error){
                callback("Unable to find the location",undefined);
            }
            else{
                callback(undefined,{
                    temperature: response.body.current.temperature,
                    feelslike: response.body.current.feelslike,
                    weather_descriptions: response.body.current.weather_descriptions
                })
            }
        }
    )
}
module.exports = forecast;