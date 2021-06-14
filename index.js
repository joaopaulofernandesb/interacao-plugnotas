const app = require('./app')
const db  = require('./src/database/banco')

db.connect()

app.listen('3333', () =>{
    console.log('Server started !')
})
