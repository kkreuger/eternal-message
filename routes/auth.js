const express = require('express')
const passport = require('passport')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const User = require('../models/User')
const router = express.Router()

// @desc Auth with Google
// @route GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// @desc Google Auth Callback
// @route GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/dashboard/berichten')
})

// @desc Email/password signup
// @route POST /auth/aanmelden
router.post('/aanmelden', async (req, res) => {
    const { displayName, firstName, lastName, password , email } = req.body 
    
    const newUser = {
        displayName,
        firstName,
        lastName,
        password,
        email
    }

    bcrypt.genSalt(10, async (err, salt) => {
        bcrypt.hash(newUser.password, salt, async (err, hash) => {
            if (err) throw err;
            newUser.password = hash;

            try {
                let user = await User.findOne({ email: email })
                if (user) {
                    res.render('signup', {
                        message: 'Dit emailadres is al geregistreerd'
                    })
                } else {
                    user = await User.create(newUser)
                    res.render('signin', {
                        message: 'Je account is aangemaakt, je kan nu inloggen.'
                    })
                }
            } catch (error) {
                res.render('signup', {
                    message: 'Er ging iets fout met je aanmelding'
                })
            }
        });
    });
})

// @desc Email/password login
// @route POST /auth/inloggen
router.post('/inloggen', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/inloggen',
        failureFlash: true
    })(req, res, next)
})

// @desc Logout user
// @route GET /auth/logout
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

module.exports = router