const mongoose = require('mongoose')
const schema = mongoose.Schema

const citySchema = new schema ({
    city: String,
    adress: String
})

module.exports = mongoose.model('cities', citySchema)