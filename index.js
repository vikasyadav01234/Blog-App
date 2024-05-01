const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("App is Running Successfully")
})

app.get("/", ()=> {
    console.log("This is HomePage ");
})