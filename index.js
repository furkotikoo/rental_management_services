const express = require("express")
const app = express()

const bodyParser = require("body-parser")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

const routes = require("./routes")
app.use(routes)



const PORT = 3000;
app.listen(PORT, () => { console.log(`app listening PORT ${PORT}`) })