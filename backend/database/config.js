const dotenv = require('dotenv');
const path = require('path');
const dotenvPath = path.resolve(__dirname, '../../env/localhost.env');
dotenv.config({path: dotenvPath});

module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    },
    test:{

    },
    production: {

    }
}