const router = require("express").Router()
const Comment = require("../models/Comment.model")
const User = require("../models/User.model")

const { isAuthenticated } = require('../middlewares/jwt.middleware')

// CREATE COMMENT
router.post('/:id/create', isAuthenticated, (req, res) => {

    const { id } = req.params
    const { content } = req.body
    const { _id } = req.payload

    Comment
        .create({ user: _id, boardGame: id, content, date: new Date() })
        .then(response => {
            res.status(201).json(response)
        })
        .catch(err => res.status(500).json(err))
})

// DELETE COMMENT
router.post('/:id/delete', (req, res) => {

    const { id } = req.params

    Comment
        .findByIdAndDelete(id)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch(err => res.status(500).json(err))
});

module.exports = router