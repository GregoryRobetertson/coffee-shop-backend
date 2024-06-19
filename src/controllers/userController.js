'use strict';

async function register(req, res, next) {
try {
    const {name, email, password} = req.body
    const user = new user({name, email, password})
    await user.save();
    res.status(200).json({message: 'User registered successfully', user})
} catch (error) {
    next(error);
}
}

async function login(req, res, next) {
    req.status(200).json({token: req.token, user:req.user})
}

async function getUsers(req, res, next) {
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}

module.exports = {login, register, getUsers}