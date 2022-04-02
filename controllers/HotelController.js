const axios = require('axios').create({
    baseURL: "http://localhost:1337/api/hotels"
});

const getHotels = async (req, res) => {
    try {
        const response = await axios.get()
        res.send(response.data)
    } catch (error) {
        res.send(error)
    }
}

const getHotelById = async (req, res) => {
    try {
        const { id } = req.params
        console.log('id', id)
        const response = await axios.get(`/${id}`)
        res.send(response.data)
    } catch (error) {
        res.send(error)
    }
}

const createHotel = async (req, res) => {
    try {
        const response = await axios.post('/', { data: req.body })
        console.log('response', response.data)
        res.send(response.data)
    } catch (error) {
        console.log('error.request', error.request)
        res.send(error)
    }
}

module.exports = {
    getHotels,
    getHotelById,
    createHotel
}