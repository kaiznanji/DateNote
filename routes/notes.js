const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('make_note')
})

module.exports = router

