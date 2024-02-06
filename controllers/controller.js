const siswa = require('../model/siswa');

const getAll = async (req, res) => {
    try {
        const siswa = await siswa.find();
        res.status(200).json(siswa);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'server error'})
    }
};

const create = (req,res) => {
    res.send(req.body)
}


module.exports = {
    getAll,
    create
};