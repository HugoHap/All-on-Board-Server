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

    const { _id } = req.params

    const promises = [User.findById(_id).populate('favouriteGames'),
    Match.find({ 'players': { _id } }).populate('boardGame')]

    Promise
        .all(promises)
        .then((response) => {
            res.json(response)
        })
        .catch(err => res.status(500).json(err))

})

router.put('/:_id/edit', isAuthenticated, (req, res) => {

    const { _id } = req.params
    const { email, username, avatar } = req.body

    User
        .findByIdAndUpdate(_id, { email, username, avatar })
        .then(() => {
            res.status(200).json("Updated")
        })
        .catch(err => res.status(500).json(err))
})

router.delete('/:_id/delete', (req, res) => {

    const { _id } = req.params

    User
        .findByIdAndDelete(_id)
        .then(() => {
            res.status(200).json("Deleted")
        })
        .catch(err => res.status(500).json(err))

})

module.exports = router