const router = require("express").Router()
const { getRooms, getRoomById, createRoom, bookRoom, deleteRoom } = require("../controllers/RoomController")

router.get("/rooms", getRooms);
router.get("/rooms/:id", getRoomById);
router.post("/rooms", createRoom);
router.put("/rooms/:id", bookRoom);
router.delete("/rooms/:id", deleteRoom);

module.exports = router