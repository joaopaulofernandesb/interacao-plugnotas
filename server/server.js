const express = require('express')
const  consultaCep = require('../consultaCep')
const db  = require('../database')
const User = require('../models/user')


const app = express()
app.use(express.json())

db.connect()

app.get('/', async (req, res)  =>{
    try {
    const { cep } =  req.body
    // console.log(cep)

    // db.createCollection("ceps")
    
    // db.ceps.insert({
    //     "cep": cep,
    //     "status": "PENDENTE"
    // })
    db.createCollection('ceps',User);

    const data =  await consultaCep(cep);

    // console.log(data.then(response => {console.log(response)}))

    return res.send(data)

    } catch (error) {
        console.log(error)
        return res.status(400).send({ error: 'Falha'})        
    }
})

app.listen('3333', () =>{
    console.log('Server started !')
})