const router = require('express').Router()
const CompuData = require('../controladores/CompudataPost')
const CompuDataGet = require("../controladores/CompudataGet")
const autentificacion = require("../helpers/autentificacion")

const Productos = require("../models/Productos")
const Registro = require('../controladores/Rgistro')
const Login = require('../controladores/Login')
const CompuDataBusquedaGet = require('../controladores/CompudataBusquedaGet')
const CompuDataName = require('../controladores/CompudataName')
const permisosdeadministracion = require('../helpers/Permisosdeadministracion')
const VerificacionDeCuenta = require("../controladores/VerificacionDeCuenta")



router.post("/registro" , Registro)
router.post("/login" , Login) 
router.get("/VerificacionDeCuenta/:token" , VerificacionDeCuenta ) 

router.get('/CompuData'  , CompuDataGet)
router.get('/CompuDatas/:name'  , CompuDataName)

router.get("/CompuData/:id",autentificacion , CompuDataBusquedaGet)


//para personal de administraion 
router.post('/CompuData' , permisosdeadministracion ,  CompuData )

router.put("/Actualizar/:id"  , permisosdeadministracion , async (req , res) =>{
    const { id } = req.params
    const { Precio , Decripcion , Nombre , Ws , Tipo} = req.body
    console.log(req.body)
    Productos
        .findByIdAndUpdate(id,req.body,{new:true})
        .then(data => res.json(data))
        .catch(error => res.json(error))
})

router.delete("/Eliminar/:id"  , permisosdeadministracion , async (req , res) =>{
    const { id } = req.params
  
    console.log(req.body)
    Productos
        .findByIdAndDelete({_id:id})
        .then(data => res.json(data).status(200))
        .catch(error => res.json(error))
})




module.exports = router