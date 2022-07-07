const { passport } = require('./authentication')

const isAuthenticated = passport.authenticate('jwt', { session: false })

// check if user is admin. Can only be used afther an isAuthenticated call
const isAdmin = async (req, res, next) => {
    if (req.user.isAdmin)
        return next()
    res.status(401).send({ "error": "User is not an admin!"})
};

module.exports = {
    isAuthenticated,
    isAdmin
}