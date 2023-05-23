const geoCode = require('./utils/geoCode');
const forecast = require('./utils/forecast');
geoCode("Philadelphia",(error,data)=>{
    if(error){
        return console.log(error)
    }
        forecast(data.latitude,data.longitude,(error,foreCastData)=>{
            if(error){
                return console.log(error)
            }
            console.log(data)
            console.log("foreCastData",foreCastData)
            }
        )
    }
)