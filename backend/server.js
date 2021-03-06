const express = require('express')
const createNote = require('./routes/createNote')
const app = express()


app.use('/createNote', createNote)


app.get('/', (req, res) => {
    res.send("hello world")
})


app.listen(5000)