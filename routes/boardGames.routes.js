const router = require("express").Router()

const BoardGame = require("./../models/BoardGame.model")


router.get('/',  (req, res, next) => {

    BoardGame
        .find()
        .then((response) => {
            res.json(response)
        })
        .catch(err => res.status(500).json(err))
})


router.post('/create', (req, res) => {
    const { name, description, gameImg, minPlayers, maxPLayers } = req.body

    const players = {
        minPlayers,
        maxPLayers
    }

    BoardGame
        .create({ name, description, gameImg, players })
        .then((boardgame) => {
            res.status(201).json({ boardgame })
        })
        .catch(err => res.status(500).json(err))

})


// // Club details 

// router.get('/:clubId', (req, res, next) => {

//     const { clubId } = req.params
//     const { _id } = req.session.currentUser
//     const isAdmin = req.session.currentUser.role === 'ADMIN'

//     const promises = [
//         Club.findById(clubId),
//         Match.find({ 'club': { $eq: clubId } }),
//         User.find({ 'favouriteClubs': { $eq: clubId } }).populate('favouriteClubs')
//     ]

//     Promise
//         .all(promises)
//         .then(([clubInfo, matchInfo, followers]) => {

//             let isFollowing = false

//             followers.forEach(eachFollower => {
//                 eachFollower.favouriteClubs.forEach(eachClub => {
//                     if (eachClub._id == clubId) {
//                         isFollowing = true
//                     }
//                 })
//             })
//             res.render('clubs/club-details', { clubInfo, matchInfo, followers, isAdmin, isFollowing })
//         })
//         .catch(err => console.log(err))
// })


// // Edit club

// router.get('/:id/editar', (req, res, next) => {

//     const { id } = req.params

//     Club
//         .findById(id)
//         .then(club => {
//             res.render('clubs/club-edit', club)
//         })
//         .catch(err => console.log(err))
// })

// router.post('/:id/editar', (req, res) => {

//     const { id } = req.params
//     const { name, street, city, zip, longitude, latitude, image, numberOfFields, web, phone, weekdaysFrom, weekdaysTo, weekendsFrom, weekendsTo, holidaysFrom, holidaysTo } = req.body

//     const schedule = {
//         weekdays: {
//             from: weekdaysFrom,
//             to: weekdaysTo,
//         },

//         weekends: {
//             from: weekendsFrom,
//             to: weekendsTo,
//         },

//         holidays: {
//             from: holidaysFrom,
//             to: holidaysTo,
//         }
//     }

//     Club
//         .findByIdAndUpdate(id, { name, street, city, zip, longitude, latitude, image, numberOfFields, web, phone, schedule }, { new: true })
//         .then(club => {
//             res.redirect('/clubs')
//         })
//         .catch(err => console.log(err))
// })


// // Add to favouriteClubs

// router.post('/:id/favourite', (req, res, next) => {

//     const { id } = req.params
//     const { _id } = req.session.currentUser

//     User
//         .findByIdAndUpdate(_id, { $addToSet: { favouriteClubs: id } })
//         .then(() => {
//             res.redirect(`/clubs/${id}`)
//         })
//         .catch(err => console.log(err))
// })


// // Eliminate from favourite

// router.post('/:id/eliminate-favourite', (req, res, next) => {

//     const { id } = req.params
//     const { _id } = req.session.currentUser

//     User
//         .findByIdAndUpdate(_id, { $pull: { favouriteClubs: id } })
//         .then(() => {
//             res.redirect(`/clubs/${id}`)
//         })
//         .catch(err => console.log(err))
// })


// // Delete club 

// router.post('/:id/eliminar', (req, res) => {

//     const { id } = req.params

//     Club
//         .findByIdAndDelete(id)
//         .then(() => {
//             res.redirect('/clubs')
//         })
//         .catch(err => console.log(err))
// })


module.exports = router
