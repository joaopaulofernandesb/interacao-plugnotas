const mongoose = require('mongoose')

const connect = () =>{
try{
    mongoose.connect('mongodb+srv://ale:013345@cluster0.8x3wq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
        })
}catch(error) {
    console.log(error)
} 
}
// mongoose.Promise = global.Promise

module.exports = { connect, mongoose }