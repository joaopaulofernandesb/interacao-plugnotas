const supertest = require('supertest')
const app = require('../../../app')
const db = require('../../../src/database/banco')
const User = require('../../../src/models/user')
const env =require('../../../src/config/config')
const { request } = require('express')

const url = process.env.MONGO_URL

describe('Teste de rotas', () => {
    beforeAll(async () => {
        db.connect(url)
    })

    beforeEach(async () => {
        await User.deleteMany()
    })

    afterAll( () => {
        db.disconnect()
    })

    it('Rota POST /cadastro deve retornar status 200', async () =>{
        await supertest(app)
            .post('/cadastro')
            .send({
                cep: '87020050'
            })
            .expect(200)
    })

    it('Rota GET / deve retornar 200', async () => {
        await supertest(app)
            .get('/')
            .expect(200)
    })
})

