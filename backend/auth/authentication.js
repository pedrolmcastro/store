const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local").Strategy;

const ObjectId = require('mongoose').ObjectId;
const User = require("../models/user");


const secretkey = "123"; // Simple key for Testing


// Local Strategy through POST Request

passport.use(new LocalStrategy(
    {
        usernameField: "email",
        passwordField: "password",
    },
    async function(email, password, done) {
        try {
            const user = await User.findOne({ email }).exec();
            if (!user) return done(null, false, { message: "User does not exist" });
            
            const match = await user.compare(password, user.password);
            if (!match) return done(null, false, { message: "Incorrect Password" });
            
            return done(null, user);
        }
        catch (error) {
            return done(error);
        }
    }
));


// Used for Session Management

passport.serializeUser((user, done) => { 
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => { 
    await User.findById(ObjectId(id), (error, user) => done(error, user));
});


// JWT Strategy: Client sends Bearer Token Header

const options = { 
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secretkey,
};

passport.use(new JwtStrategy(options, async (payload, done) => { 
    try {
        const user = await User.findById(payload.id);
        if (!user) return done(null, false);

        return done(null, { id: user.id, isadmin: user.admin });
    }
    catch (error) {
        return done(error, false);
    }
}));


module.exports = { passport, secretkey };
