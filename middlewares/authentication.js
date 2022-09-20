var jwt = require('jsonwebtoken');
require('dotenv').config();


// ====================================================
// nuevo token
// ====================================================
const generateToken = (payload) => {
    try {
        return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: 14400 });
    } catch (err) {
        return err;
    }
}

// ====================================================
// verificar token
// ====================================================

const isLoggedIn = (req, res, next) => {
    var token = req.header('authorization');
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.userData = decoded;
    } catch (err) {
        return res.status(401).send({
            message: 'La sesión no és válida'
        });
    }
    next();
}

module.exports = {
    generateToken,
    isLoggedIn
}