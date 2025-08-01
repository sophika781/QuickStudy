const mongoose = require('mongoose');
const bcrypt= require("bcrypt");

const userSchema= new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
}, {collection: "users"});

//Hashing the password before saving
userSchema.pre("save", async function (next){
    if(!this.isModified("password"))
        return next();
    try{
        const salt= await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

module.exports= mongoose.model("user", userSchema);