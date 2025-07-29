const express= require('express');
const mongoose= require('mongoose');
require('dotenv').config()

const User= require("./database/users");
const Deck= require("./database/decks");
const Card= require("./database/cards");

const app= new express();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));

