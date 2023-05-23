const https = require('http');
const url = 'http://api.weatherstack.com/current?access_key=9d691efb06236e78abf8f62d71878942&query=45,-75&units=f';
const request = https.request(url,(response)=>{
    let data = '';
    response.on('data',(chunk)=>{
        data = data + chunk.toString();
    })
    response.on('end',()=>{
        console.log("Data is ended" + data);
    }
    )   
    request.on('error',(error)=>{
        console.log("Error",error);
    }
    )
}
)
request.end();
