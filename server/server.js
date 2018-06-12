const express = require('express');
const {convert} = require('./utils/convert')
const moment = require('moment');
let app = express();
let port = 3000;

app.get('/time-stamp' , (req , res) => {
    let unix = moment(new Date() , "M-D-YYYY").valueOf();
    let date = moment(new Date()).format("dddd , MMM Do YYYY hh:mm:ss ") + "GMT";
    let object = {
        unix: unix,
        utc: date
    }
    res.send(JSON.stringify(object));
})

app.get('/time-stamp/:stamp' , (req , res) => {
    let object = convert(req.params.stamp);
    res.send(JSON.stringify(object));
})

app.listen(port , ()=> {
    console.log(`server started at port ${port}`)
})