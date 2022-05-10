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
    const { organizer, description, startTime, boardGame, location, kind } = req.body

    Match
        .create({ organizer, description, startTime, boardGame, location, kind })
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

    const { organizer, description, startTime, boardGame, location, kind } = req.body

    Match
        .findByIdAndUpdate(match_id, { organizer, description, startTime, boardGame, location, kind })
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

// JOIN MATCH 
router.post('/:id/join', (req, res) => {

    const { id } = req.params
    const { _id } = req.session.currentUser


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
router.post('/:id/unjoin', (req, res) => {

    const { id } = req.params
    const { _id } = req.session.currentUser

    Match
        .findByIdAndUpdate(id, { $pull: { players: _id } })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router