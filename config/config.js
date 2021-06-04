const dotenv = require('dotenv')

dotenv.config()

const env = process.env

module.exports = {
    Url: env.URL_API,
};
