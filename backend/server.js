const express = require("express");
const mongoose = require('mongoose');
const bodyParser  = require("body-parser");
const cors = require("cors");
const User = require("./models/userModel")

require("dotenv/config")
const app =express();

app.use(cors())
app.use(bodyParser.json())

//ROUTES
app.post("/", async (req,res)=> {
    const score = (req.body.correctAnswer/8)*100;
    const user = new User ({
        name: req.body.name,
        correctAnswer: req.body.correctAnswer,
        Score : score 
    })
    try {
        const savedUser = await user.save();
        console.log("posted")
        res.json(savedUser);
    } catch (err) {
        res.json({message: err})
    }
})

app.get("/leaderboard", async(req,res) => {
    try {
        const users = await User.find();
        console.log("test")
        res.json(users)
        
    } catch (error) {
        console.log(error)
        res.json({message : "error"}); 
    }
   
    
})

//connect to db
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true})
    .then(result => app.listen(3001))
    .catch(err => console.log(err));

