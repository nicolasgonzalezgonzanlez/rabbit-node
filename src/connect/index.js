
const amqp = require('amqplib')
const rabbitSettings = {
  protocol: 'amqp',
  hostname: 'localhost',
  port: 5672,
  username: 'guest',
  password: 'guest',
  vhost: '/',
  frameMax: 0,
  heartbeat: 0,
  authMechanism: ['PLAIN', 'AMQPLAIN', 'EXTERNAL']
}
const queue = 'services';

async function connect() {
  try {
    const conn = await amqp.connect(rabbitSettings)
    console.log('open')
    // canal
    const channel = await conn.createChannel()
    console.log('Channel created')
    // cola
    const res = await channel.assertQueue(queue)
    console.log('queue created')

    await channel.sendToQueue(queue, Buffer.from(JSON.stringify({name: "orlando", lastName: "Gonzalez"})))
  } catch (err) {
    console.log(err)
  }
}
async function conn(cola) {
  try {
    const conn = await amqp.connect(rabbitSettings)
    const channel = await conn.createChannel()
    await channel.assertQueue(cola)
    return channel
  } catch (err) {
    console.log(err)
  }
}
async function sendMessage({cola, message}) {
  conn(cola).then(async (channel) => {

    await channel.sendToQueue(cola, message)
  }).catch((err) => console.log(err))
  console.log('channel')
}

sendMessage({cola: 'payments', message: Buffer.from(JSON.stringify({name: "orlando", lastName: "Gonzalez"}))})
sendMessage({cola: 'payments', message: Buffer.from(JSON.stringify({name: "pedro", lastName: "alfonso"}))})
sendMessage({cola: 'payments', message: Buffer.from(JSON.stringify({name: "ricardo", lastName: "palacios"}))})
sendMessage({ cola: 'payments', message: Buffer.from(JSON.stringify({ name: "david", lastName: "pepinos" })) })

async function getMessage({cola}) {
  try {
    conn(cola).then(async (channel) => {
      await channel.consume(cola, (m) => {
        console.log(m.content.toString())
      })
    }).catch((err) => console.log(err))
  } catch (err) {
    console.log(err)
  }
} 
getMessage({cola: 'services'})
module.exports = {
  connect
}

