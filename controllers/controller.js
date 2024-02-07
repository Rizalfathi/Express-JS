const SiswaModel = require('../model/siswa');

const getAll = async (req, res) => {
    try {
        const siswaList = await SiswaModel.find();
        res.status(200).json(siswaList);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'server error' });
    }
};

const create = async (req, res) => {
    const data = new SiswaModel({
        nama: req.body.nama,
        nisn: req.body.nisn,
        alamat: req.body.alamat
    });
    try {
        const savedData = await data.save();
        console.log(savedData);
        res.status(201).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getAll,
    create
};