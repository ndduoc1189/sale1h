const express = require('express');
const router = express.Router();
const routerV1 = require('./v1/routers');

router.get('/', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})

router.use('/v1',routerV1)

module.exports = router;