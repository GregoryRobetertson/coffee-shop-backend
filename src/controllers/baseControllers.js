'use strict';

function home (req, res) {
    res.status(200).json({message: 'Server is online!'})
}

module.exports = home