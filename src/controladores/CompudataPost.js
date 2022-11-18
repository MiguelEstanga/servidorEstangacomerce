const Productos = require('../models/Productos')
const uploadsImagenes = require("../util/cloudinary")

async function CompuData(req , res){
    const {
           Descripcion , 
           Precio , 
           Ws , 
           Facebook,
           Nombre,
           Tipo,
           Categoria
          }  = req.body

    const { tempFilePath } = req.files.file
    const Imagenprincipal  = await uploadsImagenes(tempFilePath , 'compumaturin')
    console.log(req.body)
    try{
        const data = new Productos({
            Nombre,
            Descripcion,
            Precio,
            Ws,
            Facebook,
            Imagenprincipa:Imagenprincipal.url,
            Tipo,
            Categoria
    
        })
        await data.save()
        
        res.json({mensage:'funciona'})
    }catch(err){
        console.log('he aqui el error',err)
    }
   
}

module.exports = CompuData
