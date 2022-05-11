const router = require("express").Router()
const Match = require("./../models/Match.model")

const { isAuthenticated } = require('../middlewares/jwt.middleware')

// MATCHES LIST
router.get('/', (req, res) => {

    Match
        .find()
        .populate('boardGame')
        // .select('organizer description startTime boardGame location kind players')
        .then((response) => res.json(response))
        .catch(err => res.status(500).json(err))
})

// CREATE MATCH
router.post('/create', isAuthenticated, (req, res) => {
    const { organizer, description, startTime, boardGame, location, kind } = req.body

    Match
        .create({ organizer, description, startTime, boardGame, location, kind })
        .then((match) => res.status(201).json({ match }))
        .catch(err => res.status(500).json(err))
})

// MATCH DETAILS
router.get("/:id", (req, res) => {

    const { id } = req.params

    Match
        .findById(id)
        .populate('boardGame organizer')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// EDIT MATCH
router.put("/:id/edit", (req, res) => {

    const { id } = req.params
    const { organizer, description, startTime, boardGame, location, kind } = req.body

    Match
        .findByIdAndUpdate(id, { organizer, description, startTime, boardGame, location, kind })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// DELETE MATCH
router.delete("/:id/delete", (req, res) => {

    const { id } = req.params

    Match
        .findByIdAndDelete(id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// JOIN MATCH 
router.post('/:match_id/join', isAuthenticated, (req, res) => {

    const { id } = req.params
    const { _id } = req.payload

    Match
        .findById(id)
        .then(matches => {
            if (matches.players.length <= boardGame.players.max) {

                Match
                    .findByIdAndUpdate(id, { $addToSet: { players: _id } })
                    .then(response => res.json(response))
                    .catch(err => res.status(500).json(err))
            } else {
                res.status(500).json(err)
            }
        })
})

// UNJOIN MATCH 
router.post('/:match_id/unjoin', isAuthenticated, (req, res) => {

    const { id } = req.params
    const { _id } = req.payload

    Match
        .findByIdAndUpdate(id, { $pull: { players: _id } })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router