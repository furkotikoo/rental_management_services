const router = require("express").Router()
const { getGuests, getGuestById, createGuest } = require("../controllers/GuestController")

router.get("/guests", getGuests);
router.get("/guests/:id", getGuestById);
router.post("/guests", createGuest);
// router.delete("/guests/:id", deleteGuest);

module.exports = router