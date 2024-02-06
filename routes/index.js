const express = require('express');
const router = express.Router();

const { getAll, create } = require('../controllers/controller');

router.get('/', (req, res ) => {
    res.send('Hello World!');
});

router.get('/getall', getAll)
router.post('/create', create)

module.exports = router;