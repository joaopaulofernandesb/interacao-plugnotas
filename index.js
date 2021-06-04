const express = require('express')
const db  = require('./src/database/banco')
const User = require('./src/models/user')
const routes = require('./src/routes/routes')


const app = express()

app.use(express.json())
app.use(routes)


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