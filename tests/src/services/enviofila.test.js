const {envioFila} = require('../../../src/services/enviofila')
const { v4: uuidv4 } = require('uuid');
jest.mock('uuid');

const id = '50fc62cc-3f83-4513-817a-183a80ad25fb'

const makeFakeParams = () => ({
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
    QueueUrl: 'https://sqs.us-east-1.amazonaws.com/035638428408/dev-emanoel.fifo',
    MessageGroupId: '50fc62cc-3f83-4513-817a-183a80ad25fb',
    MessageDeduplicationId: '50fc62cc-3f83-4513-817a-183a80ad25fb',
})

describe('CepController', () => {
    test('should be able envioFila calls correct values', () => {
        uuidv4.mockImplementation(() => '50fc62cc-3f83-4513-817a-183a80ad25fb');
        const result = envioFila(id)
        expect(result).toEqual(makeFakeParams())
    })

})
