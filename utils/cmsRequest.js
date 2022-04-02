const axios = require('axios').create({
    baseURL: "http://localhost:1337/api/",
    headers: {
        Authorization: ''
    }
})
module.exports = axios