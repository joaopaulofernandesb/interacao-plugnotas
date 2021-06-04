const User = require('../models/user')
const {consultaCep} = require('../services/consultaCep')

const cadastrarCep = async(req, res) => {
    try {
        const dados = await consultaCep(req.body.cep)

        if (dados){
            const data = await User.create(dados)
            return res.json(data)
        }
    } catch (error) {
        
        return res.json({ error: true, message: 'não foi possivel cadastrar o cep'})
    }
}

const listarCep = async(req, res) => {
    const data = await User.find({})
    return res.json(data)
}

module.exports = { cadastrarCep, listarCep }