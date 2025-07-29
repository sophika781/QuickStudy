const mongoose= require('mongoose');

const User= require("./database/users");

async function isValidUsername(username){
    let user= await User.find({username: username});
    if(user.length==0)
        return false;
    return true;
}

async function isValidEmail(email){
    let user= await User.find({email: email});
    if(user.length==0)
        return false;
    return true;
}