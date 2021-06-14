const dotenv = require('dotenv');

dotenv.config();

const { env } = process;

module.exports = {
  Url: env.URL_API,
  Url_Fila: env.URL_FILA,
  accessKeyId: env.AWS_ACCESSKEY_ID,
  secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  region: env.AWS_REGION,
  mongo: 'mongodb+srv://ale:013345@cluster0.8x3wq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
};
