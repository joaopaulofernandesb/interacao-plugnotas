const app = require('./app')
const db  = require('./src/database/banco')
const User = require('./src/models/user')

db.connect()

app.listen('3333', () =>{
    console.log('Server started !')
})
