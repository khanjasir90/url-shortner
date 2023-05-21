const mongoose = require('mongoose');
require('dotenv').config();

const connectToMongo = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URL);
        console.log(`MongoDB Connected`);
      } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = {
    connectToMongo
}