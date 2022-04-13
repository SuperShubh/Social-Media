import mongoose from "mongoose";

const postSchema=mongoose.Schema({
    title:String,
    messsage:String,
    creator:String,
    tags:[String],
    selectfile:String,
    likecount:{
        type:Number,
        default:0
    },
    createat:{
    type:Date,
    default:new Date()
    }

});

const postmessage=mongoose.model('postmessage',postSchema);
export default postmessage;
