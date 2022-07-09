const { passport } = require("./authentication");


const isauthenticated = passport.authenticate("jwt", { session: false });

const isadmin = async (request, response, next) => { // Can only be used afther an isauthenticated() call
    if (request.user.isadmin) return next();
    response.status(401).send({ error: "User is not an admin." });
};


module.exports = { isauthenticated, isadmin };
