const { VerificarToken} = require("../helpers/jwt")
function autentificacion(req,  res ,  nex){
    const hederbeare = req.get("authorization")
    

    if(typeof hederbeare === "undefined"){
        return res.status(401).json({mensage:"se requiere un token" , status:401})
    }else{
        const token = hederbeare && hederbeare.split(' ')[1]
        let status = VerificarToken(token)
        if(status === 401){
            console.log("pues si funsiona")
            return res.status(401).json({mensage:"el token no es valido" , status:401})
        }else{
            console.log("si funsiona")
            nex()
        }
        
    }
    
}


module.exports = autentificacion