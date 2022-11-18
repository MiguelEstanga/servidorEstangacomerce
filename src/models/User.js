const mongoose = require("mongoose")
const {Schema , model } = mongoose

const UserModel = new Schema({
    
    nombre:{type:String},
    correo:{type:String},
    contraceña:{type:String},
    permisos:{type:String},
    telefono:{type:String},
    confirmacion:{type:Boolean , default:false}
})
module.exports = model('User' , UserModel)