const router = require('express').Router()

const { getReservations, getReservationById } = require('../controllers/ReservationController')

router.get('/reservations', getReservations)
router.get('/reservations/:id', getReservationById)

module.exports = router