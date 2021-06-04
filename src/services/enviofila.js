const aws = require('aws-sdk')
const env = require('../config/config');

const envioFila = async (id) => {
    DelaySeconds: 10
    MessageAttributes: {
        id:{id}
    }
    MessageBody:""
    QueueUrl: env.Url_Fila
}

module.export = { envioFila }
