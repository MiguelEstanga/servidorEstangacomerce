const Productos = require('../models/Productos')


async function CompuDataName(req , res){
    const { Nombre } = req.params
    const data = await  Productos.find({Nombre})
    res.json(data)
}

module.exports = CompuDataName