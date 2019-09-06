JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const Admin = require('../models/admin')
const keys = require('../config/keys')

const option = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt
}


module.exports = passport => {
    passport.use(
    new JwtStrategy(option, async (payload, done)=>{
        try {
            const user = await Admin.findById(payload.userId).select('login id')
            if (user) {
                done(null, user)
            } else {
                done(null, false)
            }
        } catch (error) {
            console.log(error)
        }
    })
)
}