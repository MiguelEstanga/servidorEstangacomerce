const jwt = require('jsonwebtoken')

const ADMINISTRACION = "0"

function permisosdeadministracion(req, res ,  nex){
    const hederbeare = req.get("authorization")
    

    if(typeof hederbeare === "undefined"){
        return res.status(401).json({mensage:"se requiere un token" , status:401})
    }else{
        const token = hederbeare && hederbeare.split(' ')[1]
        jwt.verify(token , 'lamuerte' , (err, respuesta) =>{
            console.log(respuesta)
            if(respuesta.permisos === ADMINISTRACION){
                if(err) return res.status(401).json({mensage:"el token no es valido" , status:401})
                nex()
            }else{
                res.json({mensage:"uste no tiene permiso de administracion" , status:401})
            }
        })
    }
    
}

module.exports = permisosdeadministracion