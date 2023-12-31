const express = require('express');
const dotenv = require('dotenv').config()
const { info } = require('./controllers/info-controller')
const app = express();
const PORT = process.env.PORT;
const url =  process.env.SERVICE_URL;
app.get('/',(req,res)=>{
    res.json({
        message : `server is Running on PORT : ${PORT}`
    })
})
app.get('/url',(req,res)=>{
    res.json({
        message : `server is Running on PORT : ${url}`
    })
})
app.get('/about',(req,res)=>{
    res.json({
        message : `it is a about section while running the container `
    })
})
// app.get('/new',(req,res)=>{
//     res.json({
//         message : `it is a new route`
//     })
// })
app.get('/info',info)


app.listen(PORT,(req,res)=>{
    console.log("server started successfully on port, http://localhost:3002 ,",PORT);
    console.log("hello world");
    console.log('server restarted and files updated in container also ');
});
