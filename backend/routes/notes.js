const express = require('express')
const router = express.Router()
const db = require('../lib/db')
const User = db.User


router.post('/createNote', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.name })
        if (user == null) {
            return res.status(400).send('Cannot find user')
        }

        if (await User.findOne({ username: req.body.name })) {
            return res.status(403).send('Username already exists')
        }

        const Usernotes = user.notes
        const title = req.body.title
        const date = req.body.date
        const text = req.body.text

        Usernotes.push(
            {
                title: title,
                date: date,
                text: text
            })

        // Update user with Note
        User.updateOne(user.username, { notes: Usernotes })
        saveUser(user)
        res.status(201).send('Note Created')
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})


router.delete('/deleteNote', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.name })
        if (user == null) {
            return res.status(400).send('Cannot find user')
        }
        const notes = user.notes
        const title = req.body.title
        
        for (var i = 0; i < notes.length; ++i) {
            if (notes[i].title == title) {
                delete notes[i]
            }
        }
        console.log(notes)
        // Delete Note
        User.updateOne(user.username, { notes: notes })

        saveUser(user)
        res.status(200).send('Note Deleted')
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }

    /*
    User.updateOne({ 'username': user.username },
            { $pull: { "notes": { "title":req.body.title}}}, {upsert: true}
        )
    
    User.findOneAndRemove({title: user.title }, 
    function (err, docs) { 
    if (err){ 
    console.log(err) 
    } 
    else{ 
    console.log("Removed User : ", docs); 
    } 
    */
})



// Function to save user
function saveUser(user) {
    user.save(function (err) {
        if (err) {
            console.log(err)

        }
    })
}

module.exports = router