const sqs  = require('../config/aws')
const User = require('../models/user')
const {consultaCep} = require('../services/consultaCep')
const  {envioFila}  = require('../services/enviofila')


const cadastrarCep = async(req, res) => {
    try {
        const dados = await consultaCep(req.body.cep)

            const data = await User.create(dados)

            const { id } = data
            // console.log(id)

            const params = envioFila(id)

            console.log(params)

            sqs.sendMessage(params, (err, data) => {
                if(err){
                    console.log("Error", err)
                }else{
                    console.log("Sucess", data.MessageId);
                }
            })

            return res.json(data)


    } catch (error) {
        return res.json({ error: true, message: 'não foi possivel cadastrar o cep'})
    }
}

const listarCep = async(req, res) => {
    const data = await User.find({})
    return res.json(data)
}

module.exports = { cadastrarCep, listarCep }