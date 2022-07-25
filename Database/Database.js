const mongoose = require('mongoose')
require('dotenv').config()
module.exports = async (req, res) => {


    const MONGODB_URI = process.env.MONGODB_URI 
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    var db =  mongoose.connection;
 
    db.on('connected', console.log.bind(console, 'MongoDB connected Successful to ADZPLUG DB:'));

    db.on('error',  console.error.bind(console, 'MongoDB connection error:'));

}