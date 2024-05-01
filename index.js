const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("App is Running Successfully")
})

app.get("/", (req,res)=> {
    res.send(<h1>This is My Home</h1>)
})