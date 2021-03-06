const express = require('express')
const createNote = require('./routes/createNote')
const app = express()
const db = require('./lib/db')
const User = db.User

app.set('view engine', 'ejs')

app.use(express.json())
app.use('/createNote', createNote)


app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(5000)