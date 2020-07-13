const express = require("express");
const {getRecommendData} = require("./recommend/getRecommendData")
const {getRecommendDetailData} = require("./recommendDetail/setDetailDate")
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
let app = express();
//解决跨域问题
app.all("*",function(req,res,next){
    res.header({
        'Access-Control-Allow-Credentials':true,
        'Access-Control-Allow-Origin':req.headers.origin || '*',
        'Access-Control-Allow-Headers': 'X-Requested-With',
        'Access-Control-Allow-Credentials': 'PUT POST,GET,DELETE,OPTIOMS',
        'content-Type':'application/json;charset=utf-8'
        
    });
    if(req.method == "OPTIONS"){
        res.send(200).send("OK")
         //eslint-disable-next-line no-console
        console.log("has option");
    }else{
        next()
    }
});


app.get("/api/getRecommendData",getRecommendData)
app.get("../api/getRecommendDetailData/:id",getRecommendDetailData);

app.listen(1110);