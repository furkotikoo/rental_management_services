const express = require("express")
const app = express()

const bodyParser = require("body-parser")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

const { routerRoom, routerGuest, routerHotel, routerReservation } = require("./routes")
app.use(routerRoom)
app.use(routerGuest)
app.use(routerHotel)
app.use(routerReservation)

const PORT = 3000;
app.listen(PORT, () => { console.log(`app listening PORT ${PORT}`) })