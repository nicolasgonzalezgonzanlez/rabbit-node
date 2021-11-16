
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
const queue = 'tasks';

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
module.exports = {
  connect
}

