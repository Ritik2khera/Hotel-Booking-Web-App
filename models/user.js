const { required} = require("joi");
const mongoose = require("mongoose");
const passport = require("passport");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email:{
        type:String,
        required: true,
    }, 
}); 
 
// userplugin automatic implement hasing ,salting, username we dont have to generate these things by scratch 
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",userSchema);