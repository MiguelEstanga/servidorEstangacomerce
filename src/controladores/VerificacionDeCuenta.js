const UserModel = require("../models/User")
const {VerificarToken} = require("../helpers/jwt")
async function VerificacionDeCuenta(req , res){
   const {token} = req.params
   const Decodificacion =  VerificarToken(token)
   const {correo} = Decodificacion
   const data = await UserModel.findOne({correo}) || null
   
   if(data !== null){
        data.confirmacion = true
        await data.save()
        return res.redirect('http://localhost:3000/')
   }else{
        return res.json({mensage:"Esta cuenta no existe"})
   }
}

module.exports = VerificacionDeCuenta