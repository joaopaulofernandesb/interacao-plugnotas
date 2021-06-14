const { cadastrarCep } = require('../../../src/controller/CepController')
const sqs = require('../../../src/config/aws')
const db = require('../../../src/database/banco')
const User = require('../../../src/models/user')
const service = require('../../../src/services/enviofila')

jest.mock('../../../src/config/aws')

const url = process.env.MONGO_URL

const makeHttpRequest = () => ({
    body: {
        cep: '87025040'
    }
})

const makeHttpResponse = () => ({
    json: (value) => ({value})
})

describe('Controler', () => {
    beforeAll(async () => {
        db.connect(url)
    })

    beforeEach(async () =>{
        await User.deleteMany()
    })

    afterAll( () => {
        db.disconnect()
    })

    it('Cadastrar cep com valores de schema correto', async () =>{
        const Userspy = jest.spyOn(User, 'create')

        await cadastrarCep(makeHttpRequest(), makeHttpResponse())

        expect(Userspy).toHaveBeenCalledWith({
            cep: '87025040'
        })
    })

    it('should cadastrarCep calls sendMessage correct values', async () => {
        const spy = jest.spyOn(sqs, 'sendMessage')

        await cadastrarCep(makeHttpRequest(), makeHttpResponse())

        expect(spy).toHaveBeenCalled();
    });
})
