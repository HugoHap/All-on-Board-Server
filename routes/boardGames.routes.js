const router = require("express").Router()

const BoardGame = require("./../models/BoardGame.model")

// CREATE BOARDGAME 
router.get('/', (req, res) => {

    BoardGame
        .find()
        .then((response) => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/create', (req, res) => {
    const { name, description, kind, gameImg, min, max } = req.body

    const players = {min, max}

    BoardGame
        .create({ name, description, kind, gameImg, players })
        .then((boardgame) => res.status(201).json({ boardgame }))
        .catch(err => res.status(500).json(err))

})

// EDIT BOARDGAME 
router.put('/:id/edit', (req, res) => {

    const { id } = req.params
    const { name, description, gameImg, min, max } = req.body


    BoardGame
        .findByIdAndUpdate(id, { name, description, gameImg, min, max },)
        .then(() => res.status(200).json("Updated"))
        .catch(err => res.status(500).json(err))

})

// LIKE BOARDGAME 
router.post('/:id/like', (req, res, next) => {

    const { id } = req.params

    BoardGame
        .findByIdAndUpdate(_id, { $inc: { likes: 1 } })
        .then(() => res.status(200).json("Incremenet like"))
        .catch(err => res.status(500).json(err))

})

// DISLIKE BOARDGAME 
router.post('/:id/dislike', (req, res, next) => {

    const { id } = req.params

    BoardGame
        .findByIdAndUpdate(_id, { $inc: { dislike: 1 } })
        .then(() => res.status(200).json("Increment Dislike"))
        .catch(err => res.status(500).json(err))

})

// DELETE BOARDGAME 
router.delete('/:id/delete', (req, res) => {

    const { id } = req.params

    BoardGame
        .findByIdAndDelete(id)
        .then(() => res.status(200).json("Deleted"))
        .catch(err => res.status(500).json(err))
})

module.exports = router