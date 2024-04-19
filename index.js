const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.listen(3000, () => {
  console.log("HELLO WORLD");
});

app.get("/", (req, res) => {
  res.send("Hello from NODE API!");
});

mongoose.connect("mongodb+srv://nynnwork:8QL2up5l8jJUpro5@restapi.hwpjh4s.mongodb.net/Node-API?retryWrites=true&w=majority&appName=restApi").then(()=>{
    console.log("CONNECT DB")
}).catch(()=>{
    console.log("ERROR DB")
})