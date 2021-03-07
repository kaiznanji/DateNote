const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    notes: [{
        title: {type: String},
        date: {type: String},
        text: {type: String}
    }],
    role: { type: String }
})

module.exports = mongoose.model('User', schema)