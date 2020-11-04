const express = require('express')
const { ensureAuth } = require('../middleware/auth')
const router = express.Router()

router.get('/berichten', ensureAuth, (req, res) => {
    res.render('berichten', {
        layout: 'dashboard'
    })
})

router.get('/berichten/nieuw-videobericht', ensureAuth, (req, res) => {
    res.render('video', {
        layout: 'dashboard'
    })
})

router.get('/berichten/nieuw-audiobericht', ensureAuth, (req, res) => {
    res.render('audio', {
        layout: 'dashboard'
    })
})

router.get('/gegevens', ensureAuth, (req, res) => {
    res.render('gegevens', {
        layout: 'dashboard'
    })
})

router.get('/contact', ensureAuth, (req, res) => {
    res.render('contact', {
        layout: 'dashboard'
    })
})

module.exports = router