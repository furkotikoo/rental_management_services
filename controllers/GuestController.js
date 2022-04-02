const axios = require('axios').create({
    baseURL: "http://localhost:1337/api/guests"
});

const getGuests = async (req, res) => {
    try {
        const response = await axios.get('/')
        res.send(response.data)
    } catch (error) {
        res.send(error)
    }
}

const getGuestById = async (req, res) => {
    try {
        const { id } = req.params
        const response = await axios.get(`/${id}`)
        res.send(response.data)
    } catch (error) {
        res.send(error)
    }
}

const createGuest = async (req, res) => {
    const { name, lastname, email, phone } = req.body.data
    try {
        const response = await axios.post('/', {
            data: {
                name,
                lastname,
                email,
                phone
            }
        })
        res.send(response.data)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getGuests,
    getGuestById,
    createGuest
}