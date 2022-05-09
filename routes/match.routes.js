const router = require("express").Router()

const Match = require("./../models/Match.model")

// CREATE MATCH
router.get('/', (req, res) => {

    Match
        .find()
        .then((response) => {
            res.json(response)
        })
        .catch(err => res.status(500).json(err))
})

router.post('/create', (req, res) => {
    const { organizer, startTime, boardGame, location, type, minPlayers, maxPLayers } = req.body

    const players = {
        minPlayers,
        maxPLayers
    }

    Match
        .create({ organizer, startTime, boardGame, location, type, players })
        .then((match) => {
            res.status(201).json({ match })
        })
        .catch(err => res.status(500).json(err))
})

// MATCH DETAILS
router.get("/:match_id", (req, res) => {

    const { match_id } = req.params

    Match
        .findById(match_id)
        .populate('User', 'BoardGame')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// EDIT MATCH
router.put("/:match_id/edit", (req, res) => {

    const { match_id } = req.params

    const { organizer, startTime, boardGame, location, type, minPlayers, maxPLayers } = req.body

    const players = {
        minPlayers,
        maxPLayers
    }

    Match
        .findByIdAndUpdate(match_id, { organizer, startTime, boardGame, location, type, players })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// DELETE MATCH
router.delete("/:match_id/delete", (req, res) => {

    const { match_id } = req.params

    Match
        .findByIdAndDelete(match_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router