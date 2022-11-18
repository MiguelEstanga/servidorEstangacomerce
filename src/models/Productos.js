const mongoose = require("mongoose")
const {Schema , model , Types} = mongoose

const Productosmodel = new Schema({
    Nombre:{type:String},
    Descripcion:{type:String},
    Precio:{type:String},
    Ws:{type:String},
    Facebook:{type:String},
    Imagenprincipa:{type:String},
    ColeccionImagen:[],
    Tipo:{type:String},
    Categoria:{type:String}
  
})
module.exports = model('Productos' , Productosmodel)