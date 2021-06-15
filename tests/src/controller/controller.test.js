const { cadastrarCep } = require('../../../src/controller/CepController')
const sqs = require('../../../src/config/aws')
const db = require('../../../src/database/banco')
const User = require('../../../src/models/user')
const service = require('../../../src/services/enviofila')

jest.mock('../../../src/config/aws')

//Banco criado em memoria
const url = process.env.MONGO_URL

const makeHttpRequest = () => ({
    body: {
        cep: 87025040
    }
})

const makeHttpResponse = () => ({
    json: (value) => ({value})
})

describe('Controler', () => {
    beforeAll(async () => {
        db.connect(url)
    })

    //limpa o banco
    beforeEach(async () =>{
        await User.deleteMany()
    })

    afterAll( () => {
        db.disconnect()
    })

    //Verifica se o create esta sendo feito com estrutura certa
    it('cadastrarCep com valores de schema correto', async () =>{
        const Userspy = jest.spyOn(User, 'create')

        await cadastrarCep(makeHttpRequest(), makeHttpResponse())

        expect(Userspy).toHaveBeenCalledWith({
            cep: 87025040
        })
    })

    //Verifica se o envio da mensagem esta sendo chamado
    it('Chamada de sendMessage dentro do cadastrarCep', async () => {
        const spy = jest.spyOn(sqs, 'sendMessage')

        await cadastrarCep(makeHttpRequest(), makeHttpResponse())

        expect(spy).toHaveBeenCalled();
    });
})
