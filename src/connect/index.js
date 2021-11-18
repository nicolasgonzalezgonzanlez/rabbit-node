const utils = require('./utils')

async function test() {
  console.log(utils)
  utils.sendMessage({ cola: 'payments', message: Buffer.from(JSON.stringify({name: "backo", lastName: "backo_web" }))})
  /* sendMessage({ channel: 'payments', message: Buffer.from(JSON.stringify({name: "pedro", lastName: "alfonso"})) })
  sendMessage({ cola: 'payments', message: Buffer.from(JSON.stringify({name: "ricardo", lastName: "palacios" }))})
  sendMessage({ cola: 'payments', message: Buffer.from(JSON.stringify({ name: "david", lastName: "pepinos" })) })
  sendMessage({ cola: 'payments', message: Buffer.from(JSON.stringify({ name: "david", lastName: "pepinos" })) }) */
  utils.getMessage({ cola: 'payments' })
  utils.getMessage({ cola: 'payments' })
  utils.getMessage({ cola: 'payments' })
}

module.exports = {
  test
}

