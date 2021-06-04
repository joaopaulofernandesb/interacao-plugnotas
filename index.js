const express = require('express')
const db  = require('./src/database/banco')
const User = require('./src/models/user')
const routes = require('./src/routes/routes')


const app = express()

app.use(express.json())
app.use(routes)

db.connect()


app.listen('3333', () =>{
    console.log('Server started !')
})