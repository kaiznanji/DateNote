const express = require('express')
const notes = require('./routes/notes')
const app = express()

app.set('view engine', 'ejs')

app.use('/notes', notes)

app.get('/', (req, res) => {
    res.render('main')
})

app.listen(5000)