const express = require('express')
const config = require('../config')
const router = require('./router/index')
const rabbit = require('./connect/')
 // config express
const app = express();
rabbit.test()
// config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// router
app.use('/', router);


app.listen(config.api.port, () => {
  console.log(`Listen PORT ${config.api.port}`)
})