
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

async function conn() {
  try {
    const amqpConn = await amqp.connect(rabbitSettings)
    return amqpConn
  } catch (err) {
    console.log(err)
  }
}
async function createChannel(channelName) {
  const data  = conn().then(async(amqpConn) => {
    const channel = await amqpConn.createChannel()
    await channel.assertQueue(channelName)
    return channel
  }).catch((err) => console.log(err))
  return data
}
function closeConn() {
  conn().then(async (amqpConn) => {
    amqpConn.close();
  }).catch((err) => console.log(err))
}
async function sendMessage({ cola, message }) {
  createChannel(cola).then(async (channel) => {
    await channel.sendToQueue(cola, message)
    closeConn(conn)
  }).catch((err) => console.log(err))
}

async function getMessage({cola}) {
  try {
    createChannel(cola).then(async (channel) => {
      await channel.consume(cola, (m) => {
        console.log(m.content.toString())
      })
    }).catch((err) => console.log(err))
  } catch (err) {
    console.log(err)
  }
} 

module.exports = {
  conn,
  createChannel,
  closeConn,
  sendMessage,
  getMessage
}

