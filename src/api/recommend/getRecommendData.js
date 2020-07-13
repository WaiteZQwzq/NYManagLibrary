// const express = require("express");
const {recommendTable} = require("./recommendTable");
// let app = express();
// app.get("/api/getRecommendData",function(req,res){
//     recommendTable.find({},{//查询当前所有的数据
//         __v:false,
//         _id:false
//     }).then((data)=>{
//         res.send(JSON.stringify(data))
//     }).catch((err)=>{
//         if (err) throw err;
//     })
// })
// app.listen(1234);

module.exports={
    getRecommendData:function(req,res){
        recommendTable.find({},{//查询当前所有的数据
            __v:false,
            _id:false
        }).then((data)=>{
            res.send(JSON.stringify(data))
        }).catch((err)=>{
            if (err) throw err;
        })
    }
}