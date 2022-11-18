const {crearToken} = require('../helpers/jwt')
const Usermodel = require("../models/User")
async function Login(req , res){
    const {email , password} = req.body
    const payload = await Usermodel.find({correo:email , contraceña:password})
    
    if(payload.length > 0){
        const { _id , correo , permisos , confirmacion} = payload[0]

         let data = {
            correo,
            id:_id,
            permisos,
            confirmacion
         }

          let token = crearToken(data)
          res.cookie("token" , token,{  
            httpOnly:true
          })
          res.status(200).json({token , ...data})  
    }else{
       res.json({mensage:"usuario no registrado" , status:401}).status(401)
        console.log("no registrado")
    }
}

module.exports = Login