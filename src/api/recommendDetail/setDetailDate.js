
const request = require("request");
const {JSDOM} = require("jsdom");
const {detailTable} = require("./detailTable");
const fs = require("fs");


module.exports={
    getRecommendDetailData:function (req,res){
        request({
            method:"GET",
            url:`https://i.y.qq.com/n2/m/share/details/taoge.html?ADTAG=myqq&from=myqq&channel=10007100&id=7256912512`,
            qs:{
                ADTAG:"newyqq.taoge",
                id:req.params.id
            }
        },function(err,response,body){
            let dom = new JSDOM(body,{runScripts:"dangerously"});
            let songlist = dom.window.firstPageData;
            //eslint-disable-next-line no-console
            // console.log(songlist);
            // fs.writeFile(`${__dirname}/demo.json`,songlist ,{
            //     encoding:"utf8"
            // },function(err){
            //     if(err) throw err;
            //     //eslint-disable-next-line no-console
            //     console.log("写入songlist到本地json成功");
            // })
            detailTable.find({//查询数据
                id:req.params.id
            }).then((data)=>{
                //eslint-disable-next-line no-console
                //console.log(data)
                if(data.length==0){
                    //eslint-disable-next-line no-console
                    console.log("当前数据库中无数据");
                    let finalData ={};//存储待添加到数据库的数据
                    //eslint-disable-next-line no-console
                    console.log(songlist.taogeData)
                    finalData.id=songlist.taogeData.id;//设置歌单id
                    finalData.cover=songlist.taogeData.picurl;//设置歌单封面
                    finalData.title=songlist.taogeData.title;//设置歌单名称
                    finalData.songlist=[];
                    finalData.tag=songlist.taogeData.tag;
                    songlist.taogeData.songlist.forEach((item)=>{
                        let singer =item.singer;
                        finalData.songlist.push({
                            singer:singer,
                            mid:item.mid,
                            name:item.name
                        })
                    });
                    res.send(JSON.stringify(finalData));
                    detailTable.create(finalData)
                }else{
                    //eslint-disable-next-line no-console
                    console.log("当前数据库中有数据")
                    res.send(JSON.stringify(finalData));
                }
    
            })
            res.send(songlist);//查询数据
        });
    }
}


