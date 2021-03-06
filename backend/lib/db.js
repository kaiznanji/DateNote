require('dotenv').config()
const mongoose = require('mongoose')
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
mongoose.connect(process.env.connectionString, connectionOptions)
mongoose.Promise = global.Promise

module.exports = {
    User: require('../models/user.model')
}

// Check connection state
if (mongoose.connection.readyState == 2) {
    console.log("Database is active!")
} else if (mongoose.connection.readyState == 0) {
    console.log("Database is disconnected!")
}
