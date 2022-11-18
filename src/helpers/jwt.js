const jwt = require('jsonwebtoken')

 function crearToken(payload){
    return  jwt.sign({data : payload} , 'lamuerte' )
}

function VerificarToken(token){
    let data = null 

    jwt.verify(token , 'lamuerte' , (err , resultado) => {
        if(err){
            return 401
        }else{
            data = resultado
        }   
    })
    return data
}

module.exports = { crearToken , VerificarToken }