const express = require("express")
const app = express();

const { getRooms, getRoomById, createRoom, bookRoom, deleteRoom } = require("../controllers/RoomController")

app.get("/rooms", getRooms);
app.get("/rooms/:id", getRoomById);
app.post("/rooms", createRoom);
app.put("/rooms/:id", bookRoom);
app.delete("/rooms/:id", deleteRoom);

module.exports = app;