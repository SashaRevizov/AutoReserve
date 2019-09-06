const mongoose = require('mongoose')
const schema = mongoose.Schema

const carSchema = new schema ({
    city: String,
    mark: String,
    carcase: String,
    engineCapacity: String,
    fuelType: String,
    transmissionType: String,
    price: String,
    priceZ: String,
    imageSrc: String,
    costFuel: String,
    class: String,
    status: String
})

module.exports = mongoose.model('cars', carSchema)