const mongoose= require('mongoose');

const User= require("./database/users");

async function isValidUsername(username){
    let user= await User.find({userName: username});
    console.log("User: ", JSON.stringify(user));
    console.log("Length: ", user.length);
    if(user.length===0){
        console.log("Here");
        return false;
    }
    return true;
}

async function isValidEmail(email){
    let user= await User.find({email: email});
    console.log("User: ", JSON.stringify(user));
    if(user.length===0)
        return false;
    return true;
}

module.exports= {isValidUsername, isValidEmail};