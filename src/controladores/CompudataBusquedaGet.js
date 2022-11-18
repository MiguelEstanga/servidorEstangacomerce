const Productos = require('../models/Productos')


async function CompuDataBusquedaGet(req , res){
    const { id } = req.params
    console.log(id)
    const data = await  Productos.find({_id:id})
    res.json(data)
}

module.exports = CompuDataBusquedaGet