const express = require('express');
const router = express.Router();

const { getAll, create, getId } = require('../controllers/controller'); 

router.get('/', (req, res) => {
    res.send("Hello World!");
});

router.get('/getAll', getAll);
router.post('/create', create); 
router.get('/getid/:id', getId); 

module.exports = router;