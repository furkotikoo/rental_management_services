
const knex = require("../database")

const getRooms = async (req, res) => {
    try {
        const rooms = await knex('rooms').select('*')
        res.send(rooms)
    } catch (error) {
        res.json({ error })
    }
}

const getRoomById = async (req, res) => {
    const { id: roomid } = req.params;
    try {
        const room = await knex('rooms').where({ id: roomid }).first()
        res.json({ room })
    } catch (error) {
        res.json({ error })
    }
}
const createRoom = async (req, res) => {
    const { roomNumber, floor, address, booked } = req.body
    try {
        const room = await knex('rooms').insert({
            roomNumber,
            floor,
            address,
            booked
        }).returning('*')
        res.json(room)

    } catch (error) {
        res.json({ error })
    }
}

const bookRoom = async (req, res) => {
    const { id: roomid } = req.params;
    const { booked } = req.body
    try {
        const bookedRoom = await knex("rooms").update({ booked }).where({ id: roomid }).returning("*");
        if (booked) {
            res.send(`You booked the room with the id of ${roomid}`)
        } else {
            res.send(`You canceled the book with the room with the id of ${roomid}`)
        }
    } catch (error) {
        res.json({ error })
    }
}

const deleteRoom = async (req, res) => {
    const { id: roomid } = req.params;
    try {
        await knex('rooms').where({ id: roomid }).del();
        res.status(204)
        res.send("Room deleted successfully")
    } catch (error) {
        res.json({ error })
    }
}


module.exports = {
    getRooms,
    getRoomById,
    createRoom,
    bookRoom,
    deleteRoom
}