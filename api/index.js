const express = require('express');
const router = express.Router();
const IOTA = require('iota.lib.js');

let iota = new IOTA({
    'provider': 'http://mainnet.necropaz.com:14500'
});

router.post('/getAccountData', (req, res, next) => {
    iota.api.getAccountData(req.body.seed, function(error, success) {
        if (error) {
            return res.status(500).json({
                isError: true,
                message: 'Invalid seed'
            })
        }
        return res.status(200).json(success);
    });
});

module.exports = router;