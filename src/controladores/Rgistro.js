const Usermodel = require("../models/User")
const jwt = require("jsonwebtoken")
const mensage = require("../helpers/nodemiler")
 async function buscar(correo){
    return await Usermodel.find({correo})
}

async function Registro(req , res){
    const {nombre , correo , password , telefono } = req.body
    const busqueda = await buscar(correo)
    console.log(busqueda.length)
    if(busqueda < 1){
        const data = new Usermodel({
            nombre,
            correo,
            contraceña:password,
            telefono,
            permisos:1
        })
        data.save()
        
     
        const payload = {
            permisos : data.permisos,
            nombre : data.nombre,
            correo : data.correo,
            confirmacion:data.confirmacion
        }
   
         let token = jwt.sign( {...payload} , 'lamuerte' )
        //mensage de confirnacion
         mensage(data.correo , data.nombre , token )
         res.status(200).json({token , ...payload})  
        
       

        
    
    }else{
        res.json({mensage:"Este correo ya  esta registrado" , status:401})
    }
}

module.exports = Registro