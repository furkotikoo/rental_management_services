const axios = require('../utils/cmsRequestAuth')

const getReservations = async (req, res) => {
    try {
        const response = await axios.get('/reservations');
        res.send(response.data)
    } catch (error) {
        console.log('error', error)
        res.send(error)
    }
}

const getReservationById = async (req, res) => {
    try {
        const { id } = req.params
        const response = await axios.get(`/reservations/${id}`)
        res.send(response.data)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getReservations,
    getReservationById
}
