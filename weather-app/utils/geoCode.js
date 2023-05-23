const request = require('request');
const geoCode = (address,callback) => {
    const url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWFub2hhcjI1MDkiLCJhIjoiY2xoa2c3dHZoMHJwNjNub2Vvc2dxZGU1YiJ9.f-O8FQqv4VcqJ3seDeiCdQ'
    request({url:url1, json:true},(error,response)=>{
        if(error){
            callback("Unable to connect to the location services",undefined);
        }
        else if(response.body.features.length == 0){
            callback("Unable to find the location",undefined);
        }
        else{
            callback(undefined,{
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0]
            })
        }
    }
    )
}
module.exports = geoCode;