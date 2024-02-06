const express = require('express');
const router = express.Router();

const { getAll } = require('../controllers/controller');

router.get('/', (req, res ) => {
    res.send('Hello World!');
});

router.get('/getall', getAll)

module.exports = router;