const router = require('express').Router()

const { Router } = require('express')
const Booking = require('../models/Booking.model')

// CREATE BOOKING 
router.post("/create/:game_id", (req, res) => {

    const { game_id } = req.params
    const { _id } = req.payload

    const { boardGame, startDate, endDate } = req.body

    Booking
        .create({ user: _id, boardGame: game_id, startDate, endDate })
        .then((booking) => { //RESPONSE O BOOKING
            res.status(201).json(booking)
        })
        .catch(err => res.status(500).json(err))
})

// BOOKING DETAILS
router.get("/:booking_id", (req, res) => {

    const { booking_id } = req.params

    Booking
        .findById(booking_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// EDIT BOOKING
router.put("/:booking_id/edit", (req, res) => {

    const { booking_id } = req.params
    const { boardGame, startDate, endDate } = req.body

    Booking
        .findByIdAndUpdate(booking_id, { boardGame, startDate, endDate })
        .then(() => res.json("Saved booking"))
        .catch(err => res.status(500).json(err))
})

// DELETE BOOKING
router.delete("/:booking_id/delete", (req, res) => {

    const { booking_id } = req.params

    Booking
        .findByIdAndDelete(booking_id)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch(err => res.status(500).json(err))
})

module.exports = router