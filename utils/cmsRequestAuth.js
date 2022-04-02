// const { Authorization } = require('../middleware/Authorization')
const axios = require('../utils/cmsRequest')

const Authorization = async () => {
    try {
        const response = await axios.post('/auth/local', {
            identifier: 'postman',
            password: 'postman'
        })
        const { user, jwt } = response.data
        console.log('jwt', jwt)
        return jwt
    } catch (error) {
        return null
    }
}

const setToken = async () => {
    const token = await Authorization();
    axios.defaults.headers['Authorization'] = `Bearer ${token}`
    console.log('axios.defaults.headers', axios.defaults.headers)
}
setToken()

module.exports = axios