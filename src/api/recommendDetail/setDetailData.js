const request = require("request");
const {JSON} = require("jsdom");
const fs = require("fs")
request({
    method:"GET",
    url:``

},function(err,res,body){
    let dom = new JSON(body,{runScripts:"dangerously"});
    let songlist = JSON.stringify(dom.window.firstPageData);
    //eslint-disable-next-line no-console
    // console.log(songlist);
    fs.writeFile(`${__dirname/DeviceMotionEvent.js}`,body,{
        encoding:"utf8"

    },function(err){
        if(err) throw err;
        //eslint-disable-next-line no-console
        console.log("写入songlist到本地json成功");
    })
})