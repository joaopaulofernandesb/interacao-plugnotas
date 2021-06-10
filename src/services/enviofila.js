const { v4: uuidv4 } = require('uuid');
const env = require('../config/config');

const envioFila = (id) => {
  // console.log("enviafila", id)
  const params = {
    // DelaySeconds: 10,
    MessageAttributes: {
      Title: {
        DataType: 'String',
        StringValue: 'Id cadastro de cep no banco',
      },
      Author: {
        DataType: 'String',
        StringValue: 'Alessandro',
      },
      WeeksOn: {
        DataType: 'Number',
        StringValue: '1',
      },
      id: {
        DataType: 'String',
        StringValue: id,
      },
    },

    MessageBody: JSON.stringify({ id }),
    QueueUrl: env.Url_Fila,
    MessageGroupId: uuidv4(),
    MessageDeduplicationId: uuidv4(),
  };

  return params;
};

module.exports = { envioFila };
