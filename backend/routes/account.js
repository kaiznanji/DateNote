const express = require('express')
const router = express.Router()
const db = require('../lib/db')
const User = db.User

router.delete('/', async (req, res) => {
  User.deleteMany({}, function (err) {
    console.log('collection removed')
  })
})


router.get('/users', async (req, res) => {
  const users = await User.find()
  if (users == null) {
    res.sendStatus(500)
  }
  else {
    res.json(users)
  }
})


router.post('/addUser', async (req, res) => {
  try {
    // Check if username already exists
    if (await User.findOne({ username: req.body.name })) {
      return res.status(403).send('Username already exists')
    }

    const user = new User({
      username: req.body.name,
      role: 'client'
    })

    saveUser(user)

    res.status(200).send()


  }
  catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

router.post('/login', async (req, res) => {
  const user = await User.findOne({ username: req.body.name })
  try {
    // Check if username already exists
    if (user == null) {
      return res.status(400).send('Cannot find user')
    }

    res.status(200).send("Logged in")

  }
  catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
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