module.exports = {
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'admin',
        password: 'admin',
        database: 'rental_management_services'
    },
    migrations: {
        directory: __dirname + '/database/migrations'
    },
    seeds: {
        directory: __dirname + '/database/seeds'
    },
}