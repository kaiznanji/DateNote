const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const notes = [{
        name: 'Sahir'
    },
    {
        name: 'Kaiz'
    }]
    res.render('index', { notes : notes })
})

app.listen(5000)