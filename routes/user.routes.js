const router = require("express").Router()

const User = require('./../models/User.model')
const Match = require('./../models/Match.model')

const { isAuthenticated } = require("../middlewares/jwt.middleware")


router.get('/', isAuthenticated, (req, res) => {

    User
        .find()
        .then((response) => {
            res.json(response)
        })
        .catch(err => res.status(500).json(err))
})

router.get('/:_id', isAuthenticated, (req, res) => {

    const { _id } = req.payload

    const promises = [User.findById(_id).populate('favouriteGames'),
    Match.find({ 'players': { _id } }).populate('startTime boardGame')]

    User
        .findById(_id)
        .populate('favouriteGames')
})

router.put('/:id/edit', isAuthenticated, (req, res) => {

    const { _id } = req.payload
    const { email, username, avatar } = req.body

    User
        .findByIdAndUpdate(_id, { email, username, avatar })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete('/:_id/delete', (req, res) => {

    const { _id } = req.params

    User
        .findByIdAndDelete(_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))

})

module.exports = router