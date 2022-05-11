const router = require("express").Router()

const BoardGame = require("./../models/BoardGame.model")

const { isAuthenticated } = require("./../middlewares/jwt.middleware")

// BOARDGAME LIST
router.get('/', (req, res) => {

    BoardGame
        .find()
        // .select('owner name description playingTime age gameImg players likes dislike')
        .then((response) => res.json(response))
        .catch(err => res.status(500).json(err))
})

// CREATE BOARDGAME
router.post('/create', isAuthenticated, (req, res) => {
    const { name, description, kind, gameImg, min, max } = req.body

    const { _id: owner } = req.payload

    const players = { min, max }

    BoardGame
        .create({ name, description, kind, gameImg, players, owner })
        .then((boardgame) => res.status(201).json({ boardgame }))
        .catch(err => res.status(500).json(err))

})

// BOARDGAME DETAILS
router.get("/:id", (req, res) => {

    const { id } = req.params

// PROMISE ALL FILTRO ENCONTRANDO PARTIDOS CON MISMO NAME Y TIPO RENT Comment.find({ 'match': { $eq: id } })
    BoardGame
        .findById(id)
        .populate('owner')
        .then(response => {
            res.json(response)
        })
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
        .findByIdAndUpdate(id, { $inc: { likes: 1 } })
        .then(() => res.status(200).json("Incremenet like"))
        .catch(err => res.status(500).json(err))

})

// DISLIKE BOARDGAME 
router.post('/:id/dislike', (req, res, next) => {

    const { id } = req.params

    BoardGame
        .findByIdAndUpdate(id, { $inc: { dislike: 1 } })
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