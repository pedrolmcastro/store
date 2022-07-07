const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const ObjectId = require('mongoose').ObjectId

const User = require('../models/user')

const secretKey = '123' // Simple key for testing purposes

// Local Strategy through POST request
passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    async function (email, password, done) { 
        // Check for user
        try {
            const user = await User.findOne({ email }).exec()
            if (!user)
                return done(null, false, { message: "User doesn't exist" })
            
            // Check if password matches
            const match = await user.compare(password, user.password)
            if (!match) 
                return done(null, false, { message: 'Incorrect Password' })
            
            return done(null, user)
        } catch (err) {
            return done(err)
        }
    }
))

// Woulb be used for session management
passport.serializeUser((user, done) => { 
    done(null, user.id)
})
passport.deserializeUser(async (id, done) => { 
    await User.findById(ObjectId(id), (err, user) => { 
        done(err, user)
    })
})

// JWT Strategy: Client sends Bearer token header
const opts = { 
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secretKey
}

// Check if JWT is valid (unadultered, not expired)
passport.use(new JwtStrategy(opts, async (payload, done) => { 
    try {
        const user = await User.findById(payload.id)    
        if (!user)
            return done(null, false)

        return done(null, { id: user.id, isAdmin: user.admin })
    } catch (err) {
        return done(err, false)
    }

}))

module.exports = { passport, secretKey }