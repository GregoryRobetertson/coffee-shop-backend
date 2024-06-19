
const bcrypt = required
async function checkEmail(req, res, next) {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email}).exec();

        if(!user) {
          return  res.status(400).json({error: 'Invalid email or password'})
        }
        req.user = user;
        next();
    } catch (error) {}
}

async function checkPassword(req, res, next) {
    
try {
    const password = req.body
    const isMatch = await bcrypt.comparePassword(password)
    if(!isMatch) {
        return  res.status(400).json({error: 'Invalid email or password'})
        
    }next();
} catch (error) {
    next(error)
}
}

const jwt = require('jsonwebtoken'); // Make sure jwt is required/imported

async function signToken(req, res, next) {
    try {
        const userId = req.user._id;
        const role = req.user.role;

        const token = await jwt.sign({ userId, role }, process.env.SECRET, {
            expiresIn: '1h',
        });

        req.token = token;
        next(); // Call next to proceed to the next middleware
    } catch (error) {
        next(error); // Pass any caught error to the error handling middleware
    }
}

module.exports = signToken;



module.exports = {checkEmail, checkPassword, signToken};