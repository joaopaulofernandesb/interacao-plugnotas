/* eslint-disable no-console */
const sqs = require('../config/aws');
const User = require('../models/user');
const { envioFila } = require('../services/enviofila');

const cadastrarCep = async (req, res) => {
  try {
    const dados = req.body;

    console.log(dados)

    const data = await User.create(dados);

    const { id } = data;

    const params = envioFila(id);

    sqs.sendMessage(params, (err, result) => {
      if (err) {
        console.log('Error', err);
      } else {
        console.log('Mensagem criada com Sucesso, Id:', result.MessageId);
      }
    });

    return res.json(data);
  } catch (error) {
    return res.json({ error: true, message: 'não foi possivel cadastrar o cep' });
  }
};

const listarCep = async (req, res) => {
  const data = await User.find({});
  return res.json(data);
};

module.exports = { cadastrarCep, listarCep };
