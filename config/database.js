const mongoose = require("mongoose");


require("dotenv").config();
const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL)
};