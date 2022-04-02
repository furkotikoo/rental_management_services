const router = require('express').Router()

const { getHotels, getHotelById, createHotel } = require('../controllers/HotelController')

router.get("/hotels", getHotels)
router.get("/hotels/:id", getHotelById)
router.post("/hotels", createHotel)

module.exports = router