const mongoose = require('mongoose');
const { Schema } = mongoose;

const urlSchema = Schema({
    orignalUrl: {
        type: String,
        required: true,
    },
    shortendUrl: {
        type: String,
        required: true
    }
});

const URL = mongoose.model('URL', urlSchema);
module.exports = URL;