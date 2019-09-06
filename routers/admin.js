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
const router = express.Router();
const app = express();


router.post('/login', async (req, res)=>{
    const candidate = await Admin.findOne({login: req.body.login})
    if (candidate){
        const valid = await bcrypt.compare(req.body.password, candidate.password)
            if (valid) {
                const token = jwt.sign({
                    login: candidate.login,
                    userId: candidate._id
                }, keys.jwt)

                res.status(200).json({
                    token: `Bearer ${token}`
                })
            } else {
                res.status(401).json({
                    message: 'Невірний пароль'
                })
            }
        }
     else {
        res.status(404).json({
            message: 'Немає доступу'
        })
    }
}).post('/addCar', passport.authenticate('jwt', {session: false}), upload.single('image'), async(req,res)=>{
    const car = new Car({
        city: req.body.city,
        mark: req.body.mark,
        carcase: req.body.carcase,
        engineCapacity: req.body.engineCapacity,
        fuelType: req.body.fuelType,
        transmissionType: req.body.transmissionType,
        price: req.body.price + " грн.",
        priceZ: req.body.priceZ + " грн.",
        imageSrc: req.file ? req.file.path : '',
        costFuel: req.body.costFuel,
        class: req.body.class,
        status: "В наявності"
    })
    try {
        await car.save()
                res.status(201).json({
                    message: 'Машина добавлена'
                })
    } catch (error) {
        errorHandler(res, error)
    }
}).delete('/car/:id', passport.authenticate('jwt', {session: false}), async(req,res)=>{
    try {
        await Car.remove({_id: req.params.id})
        res.status(200).json({
          message: 'Машина видалена'
        })
      } catch (e) {
        errorHandler(res, e)
      }
}).get('/car', passport.authenticate('jwt', {session: false}), async(req,res)=>{
    try {
        const cars = await Car.find()
        res.status(200).json(cars)
    } catch (error) {
        errorHandler(res, e)
    }
})
.get('/process', passport.authenticate('jwt', {session: false}), async(req,res)=>{
    try {
        const cars = await Car.find({status: "Заброньована"})
        res.status(200).json(cars)
    } catch (error) {
        errorHandler(res, e)
    }
})
.patch('/process', passport.authenticate('jwt', {session: false}), async(req,res)=>{
    try {
        const car = await Car.findOneAndUpdate(
            {_id: req.body._id},
            {$set: {status: "В наявності"}},
            {new: true}
        )
        res.status(200).json({
            message: 'Статус змінено'
        })
    } catch (error) {
        errorHandler(res, error)
    }
})
.patch('/car', passport.authenticate('jwt', {session: false}), async(req,res)=>{
    try {
        const car = await Car.findOneAndUpdate(
            {_id: req.body._id},
            {$set: {status: "В наявності"}},
            {new: true}
        )
        res.status(200).json({
            message: 'Статус змінено'
        })
    } catch (error) {
        errorHandler(res, error)
    }
})

module.exports = router