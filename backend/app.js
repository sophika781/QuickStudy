const express= require('express');
const jwt= require('jsonwebtoken');
const bodyParser= require('body-parser');
let isValidUsername = require("./auth_users.js").isValidUsername;
let isValidEmail = require("./auth_users.js").isValidUsername;

const mongoose= require('mongoose');
require('dotenv').config()
const jwtSecret= process.env.JWT_SECRET;

const User= require("./database/users");
const Deck= require("./database/decks");
const Card= require("./database/cards");

const app= new express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));

app.post('/register', async(req, res) => {
    const firstname= req.body.firstName;
    const lastname= req.body.lastName;
    const username= req.body.username;
    const email= req.body.email;
    const password= req.body.password;

    if(!username || !email || !password || !firstname){
        res.status(400).json("Plase enter valid username, password, email or first name!");
    }
    else if(!isValidUsername(username)){
        if(!isValidEmail(email)){
            const new_user= new User({
                firstName: firstname,
                lastName: lastname,
                userName: username,
                email: email,
                password: password
            });

            try{
                const user = await new_user.save();
                res.status(200).json("New user successfully created");
            } catch(err){
                console.log(error);
                res.status(500).json({error: "Error inserting review."});
            }
        } else 
            res.status(400).json("Email already taken! Enter another one!");
    } else
        res.status(400).json("Username is already taken! Enter another one!");

});


