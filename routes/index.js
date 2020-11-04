const express = require('express')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const router = express.Router()

router.get('/', ensureGuest, (req, res) => {
    res.render('homepage')
})

router.get('/aanmelden', ensureGuest, (req, res) => {
    res.render('signup', {
        layout: 'login'
    })
})

router.get('/inloggen', ensureGuest, (req, res) => {
    res.render('signin', {
        layout: 'login'
    })
})


module.exports = router