const aws = require('aws-sdk')

aws.config.update({
    accessKeyId: process.env.AWS_ACCESSKEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
})

const sqs = new aws.SQS({ apiVersion: '2012-11-05' })

module.exports = {sqs}
