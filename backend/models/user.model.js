const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    notes: [{
        date: String,
        text: String
    }] ,
    role: { type: String }
})

module.exports = mongoose.model('User', schema)