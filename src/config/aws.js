const aws = require('aws-sdk')
const env = require('./config');

aws.config.update({
    accessKeyId: env.accessKeyId,
    secretAccessKey: env.secretAccessKey,
    region: env.region,
    token: env.token
})

const sqs = new aws.SQS({ apiVersion: '2012-11-05' })

module.exports = sqs
