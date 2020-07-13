const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://127.o.o.1:27017/kuaile",{
    useUnifiedTopology: true,
    useNewUrlParser:true
}).then(()=>{
    console.log("链接数据库成功")
}).catch(()=>{
    console.log("链接数据库失败")
});

let detailSchema = new Schema({
    id:{//用于后期的数据识别
        required:true,
        type:String
    },
    cover:{//封面
        required:true,
        type:String
    },
    title:{//歌单名称
        required:true,
        type:String
    },
    tag:[//歌单种类
        {
            id:{
                required:true,
                type:Number
            },
            name:{
                required:true,
                type:String
            }
        }
    ],
    songlist:[
        {
            mid:{//音乐的id
                required:true,
                type:String
            },
            name:{//音乐的名称
                required:true,
                type:String
            },
            singer:[
                {
                    id:{//歌手的id
                        required:true,
                        type:String
                    },
                    mid:{//歌手的mid
                        required:true,
                        type:String
                    },
                    name:{//歌手的名字
                        required:true,
                        type:String
                    },
                    title:{//歌手的名字
                        required:true,
                        type:String
                    }

                }
            ]
        }
    ]
})

let detailTable = mongoose.model("detailTable",detailSchema);

module.exports