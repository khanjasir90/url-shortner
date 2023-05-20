const mongoose = require('mongoose');
require('dotenv').config();

const connectToMongo = async () => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(process.env.DB_URL);
        console.log('connected to db');
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = {
    connectToMongo
}