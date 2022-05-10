const router = require("express").Router()

const BoardGame = require("./../models/BoardGame.model")

const { isAuthenticated} = require("./../middlewares/jwt.middleware")

router.get('/', (req, res, next) => {

    BoardGame
        .find()
        .then((response) => {res.json(response)
        })
        .catch(err => res.status(500).json(err))
})


router.post('/create', isAuthenticated, (req, res) => {
    const { name, description, kind, gameImg, min, max } = req.body

    const owner = req.payload._id

    console.log(owner)

    const players = {
        min,
        max
    }

    BoardGame
        .create({ name, description, kind, gameImg, players, owner })
        .then((boardgame) => {
            res.status(201).json({ boardgame })
        })
        .catch(err => res.status(500).json(err))

})

router.get("/:id", (req, res) => {

    const { id } = req.params

    BoardGame
        .findById(id)
        .populate('owner')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/:id/edit', (req, res) => {

    const { id } = req.params

    const { name, description, gameImg, min, max } = req.body


    BoardGame
        .findByIdAndUpdate(id, { name, description, gameImg, min, max },)
        .then(() => {
            res.status(200).json("Updated")
        })
        .catch(err => res.status(500).json(err))

})

router.put('/:id/like', (req, res, next) => {

    const { id } = req.params

    BoardGame
        .findByIdAndUpdate(_id, { $inc: { likes: 1 } })
        .then(() => {
            res.status(200).json("Incremenet like")
        })
        .catch(err => res.status(500).json(err))

})

router.put('/:id/dislike', (req, res, next) => {

    const { id } = req.params

    BoardGame
        .findByIdAndUpdate(_id, { $inc: { dislike: 1 } })
        .then(() => {
            res.status(200).json("Increment Dislike")
        })
        .catch(err => res.status(500).json(err))

})


router.delete('/:id/delete', (req, res) => {

    const { id } = req.params

    BoardGame
        .findByIdAndDelete(id)
        .then(() => {
            res.status(200).json("Deleted")
        })
        .catch(err => console.log(err))
})


module.exports = router
