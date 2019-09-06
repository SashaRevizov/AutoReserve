const express = require('express');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')

const Admin = require('../models/admin')
const City = require('../models/cities')
const Car = require('../models/car')
const keys = require('../config/keys')
const upload = require('../middleware/upload')
const errorHandler= require('../utils/errorHandler')
const mail = require('../utils/sendMail')
const router = express.Router();
const app = express();


router
.get('/clientCar', async (req, res)=>{
    try {
        const cars = await Car.find()
        res.status(200).json(cars)
    } catch (error) {
        errorHandler(res, error)
    }

})
.get('/kiev', async (req, res)=>{
    try {
        const cars = await Car.find({status: "В наявності"})
        res.status(200).json(cars)
    } catch (error) {
        errorHandler(res, error)
    }

})

.get('/kiev/reserv/:id', async (req, res)=>{
    try {
        const car = await Car.findOne({_id: req.params.id})
        res.status(200).json(car)
    } catch (error) {
        errorHandler(res, error)
    }

})
.post('/kiev/reserv/:id', async (req, res)=>{
    try {
        const car = await Car.findOne({_id: req.params.id})
        await Car.findOneAndUpdate(
            {_id: req.params.id},
            {$set: {status: "Заброньована"}},
            {new: true}
    )
        mail(req,req.body.pib,req.body.email,req.body.startPlace,req.body.endPlace,req.body.birthsday,req.body.phone,req.body.dateStart,req.body.dateEnd,  car)
        res.json({message: "Заброньована"})
    } catch (error) {
        errorHandler(res, error)
    }

})


module.exports = router