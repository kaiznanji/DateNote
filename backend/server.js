'use strict';

const express = require('express')
const app = express()
const db = require('./lib/db')
const User = db.User

// Importing routes
const notes = require('./routes/notes')
const account = require('./routes/account')

app.set('view engine', 'ejs')

app.use(express.json())
app.use('/notes', notes)
app.use('/account', account)


app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(5000)