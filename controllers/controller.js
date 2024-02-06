const getAll = (req, res) => {
    res.send("ini data dari get all")
}

const create = (req, res) => {
    res.send(req.body)
}

module.exports = {
    getAll,
    create
}