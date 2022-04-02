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

module.exports = {
    Authorization
}