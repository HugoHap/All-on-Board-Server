const express = require('express');
const req = require('express/lib/request');
const router = express.Router();

const User = require('../models/User.model');
const BoardGame = require('../models/BoardGame.model');

//CREAR PARTIDA
router.get('/create', (req, res) => {
    res.render('match/create-matchs')
})

router.post('/create', (req, res) => {
    const { organizer, game, players, location } = req.body

    Event
        .create({ organizer, game, players, location })
        .then(() => {
            res.redirect('/event/events-list')
        })
        .catch(err => console.log(err))
})