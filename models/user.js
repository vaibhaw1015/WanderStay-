/*const { required } = require("joi");
const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const  passportLocalMongoose=require("passport-local-mongoose");
const userSchema=new Schema({
    email:{
        type:String,
        required: true
    },
})
userSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model('User', userSchema); */



/////this is previous
/*const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);

*/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  }
});

// plugin will add username hashing & salting features
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
