const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Gym_website").then(()=>{
    console.log("connection suceesful")
}).catch((e)=>{
    console.log(e)
})

