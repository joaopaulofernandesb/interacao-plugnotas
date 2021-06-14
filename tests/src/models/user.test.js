const User = require('../../../src/models/user')

describe('Gravação de dados', () => {
    it('se esta gravando novo cep', () => {
        const dados = User.create({
            cep: '87023490'
        })
        expect(dados).toBe("")
    })
})
