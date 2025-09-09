const mongoose= require('mongoose');
const dayjs=require('dayjs');

require("dayjs/plugin/utc")
require("dayjs/plugin/timezone")

dayjs.extend(require("dayjs/plugin/utc"))
dayjs.extend(require("dayjs/plugin/timezone"))
const messageSchema= new mongoose.Schema({
    name:String,
    message:String,
    timestamp:{
        type:String,
        default:()=>dayjs().tz("Asia/Kolkata").format("DD-MM_YY hh:mm A")
    }
});

module.exports=mongoose.model('message',messageSchema)