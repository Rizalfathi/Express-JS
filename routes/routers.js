const express = require('express');
const router = express.Router();

const { getAll, create, getId, update, hapus } = require('../controllers/controller'); 

router.get('/', (req, res) => {
    res.send("Hello World!");
});

router.get('/getAll', getAll);
router.post('/create', create); 
router.get('/getid/:id', getId); 
router.put('/update/:id', update);
router.delete('/hapus/:id', hapus) 

module.exports = router;