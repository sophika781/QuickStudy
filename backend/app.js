const express= require('express');
const cors= require('cors');
const bcrypt= require("bcrypt");
const jwt= require('jsonwebtoken');
const bodyParser= require('body-parser');
let isValidUsername = require("./auth_users.js").isValidUsername;
let isValidEmail = require("./auth_users.js").isValidEmail;

const mongoose= require('mongoose');
require('dotenv').config()
const jwtSecret= process.env.JWT_SECRET;
const port= process.env.PORT;

const User= require("./database/users");
const Deck= require("./database/decks");
const Card= require("./database/cards");

const app= new express();
app.use(bodyParser.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST'],
    credentials: true
}));

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));

app.post('/register', async(req, res) => {
    console.log(req.body);
    const firstname= req.body.firstName;
    const lastname= req.body.lastName;
    const username= req.body.username;
    const email= req.body.email;
    const password= req.body.password;

    if(!username || !email || !password || !firstname){
        res.status(400).json("Plase enter valid username, password, email or first name!");
    }
    else if(! (await isValidUsername(username))){
        if(! (await isValidEmail(email))){
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
                console.log(err);
                res.status(500).json({err: "Error creating user."});
            }
        } else{ 
            res.status(400).json("Email already taken! Enter another one!");
        }
    } else{
        res.status(400).json("Username is already taken! Enter another one!");
    }

});

app.post("/login", async(req, res) => {
    const username= req.body.username;
    const password= req.body.password;

    if(isValidUsername(username)){
        const user= await User.findOne({userName: username});
        console.log("Password: ", password);
        console.log("Found password: ", user.password);
        const isMatch= await bcrypt.compare(password, user.password);
        if(isMatch){
            const token= jwt.sign({username}, jwtSecret, {expiresIn: '3h'})
            const firstName= user.firstName;
            const lastName= user.lastName;
            res.status(200).json({
                message: "User successfully logged in!",
                token: token,
                firstName: firstName,
                lastName: lastName
            });
        }
        else{
            res.status(400).json("Password is incorrect!");
        }
    } else
        res.status(400).json("Username is invalid!");
});

app.listen(port, () => {
    console.log(`Server running at ${port}`)
});
