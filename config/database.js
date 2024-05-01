const mongoose = require("mongoose");
const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL)
};