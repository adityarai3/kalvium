const mongoose = require('mongoose');
const mongoURi = "mongodb://127.0.0.1:27017/Kalvium"

const connectToMongo = () =>{
    mongoose.connect(mongoURi)
}

module.exports = connectToMongo;