const { API_TOKEN } = require('./config');

function validate(req, res, next) {
    const apiToken = process.env.API_TOKEN;
    const authToken = req.get('Authorization');

    if (!authToken || authToken.split(' ')[1] !== apiToken) {
        return res
            .status(401)
            .json({ error: `Unauthorized request to path: ${req.path}` });
    }
    // move to the next middleware
    next();
}

module.exports = validate;
