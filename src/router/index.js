const express = require('express')

const router = express.Router();

router.get('/hi', async (req, res) => {
  console.log('hola')
  res.sendStatus(200)
})

module.exports = router;
