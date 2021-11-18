const express = require('express')
const utils = require('../connect/utils')
const router = express.Router();

router.get('/message/:name/:lastName', async (req, res) => {
  console.log('hola')
  const {name, lastName} = req.params
  utils.sendMessage({ cola: 'payments', message: Buffer.from(JSON.stringify({name: name, lastName: lastName }))})
  res.sendStatus(200)
})

module.exports = router;

/*
  tamaño
  message package
  binary message
  nomenclatura
  envio informacion completa
  configuracion del componente
  factory, funcion a algo, le mando un permiso o otro
  SOLID
*/
