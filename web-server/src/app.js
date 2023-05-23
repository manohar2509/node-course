const express = require('express');
const path = require('path');
const app = express();
const publicDir = path.join(__dirname,'../public');
app.use(express.static(publicDir));
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/help',(req,res)=>res.send('<h1>Help Page</h1>'));
app.get('/about',(req,res)=>res.send('About Page'));
app.get('/weather',(req,res)=>{

    if(req.query.address){
        return res.send({
            forecast: 'It is snowing',
            address: req.query.address
        });
    }
    else{
        return res.send({
            error: 'You must provide an address'
        });
    }
    console.log(req.query.address);
});

app.listen(3000,()=>{
    console.log('Server is up on port 3000');
})