const router = require('express').Router()
const CompuData = require('../controladores/CompudataPost')
const CompuDataGet = require("../controladores/CompudataGet")
const CompuDataBusquedaGet = require('../controladores/CompudataBusquedaGet')
const PortadaGet = require("../controladores/Portadaget")
const PortadaP  = require('../controladores/Portada')
const Monitoreomodel = require('../models/monitoreo')

router.get('hola' , (req , res ) => {
    res.json({mensage:'hola mundo'})
})

router.post('/CompuData' , CompuData )
router.post('/portada' , PortadaP )
 
router.get('/Compudata' , CompuDataGet)
router.get("/Compudata/:name" , CompuDataBusquedaGet)
router.get("/portada" , PortadaGet )

router.get('/monitoreo' , function(req, res){
    res.json({ip:req.ipInfo.ip})
})

module.exports = router