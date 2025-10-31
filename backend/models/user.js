const mongoose=require('mongoose');
const {Schema}=mongoose;

const UserSchema=new Schema({
    firstname:{
        type:String,
        required:true,
        minlength:3,
        maxlength:20
    },
    emailId:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        immutable:true
    },
    password:{
        type:String,
        required:true,
        minlength:8,
    
    },

},{timestamps:true});

const User=mongoose.model('user',UserSchema);

module.exports=User;