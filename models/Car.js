const mongoose = require('mongoose')


const Car = new mongoose.Schema({
    type: {type: String},
    price: {type: Number},
    sity: {type: String},
    driveUnit: {type: String},
    distance: {type: Number},
    breand: {type: String},
    exchange: {type: Boolean},
    image: {type: String},
    model: {type: String},
    typeOfCar: {type: String},
    year: {type: Number},
    region: {type: String},
    state: {type: String},
    fuel: {type: String},
    mileage: {type: Number},
    engine: {type: Number},
    color: {type: String},
})  

const CarModel = mongoose.model("cars", Car)
module.exports = CarModel