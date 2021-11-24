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

class Message  {
  constructor(userId, type, productId, transactionId, amount, emit) {
    this.userId = userId;
    this.event = {
      type,
      productId,
      transactionId,
      amount,
      emit
    };
  }
  get message() {
    return this.userId, this.event;
  }
}

const newMessage = new Message('i983fecc0-3cf1-4ca0-ab1b-9290a6ca881c', null, '7CD0000E7FB13B5B054B', '7467eba0-784b-11eb-80b0-87cb42996d11', 500, 'payment-services')

console.log(newMessage.message) 

async function Query () {
  return new Promise((resolve, reject) => {
    amqp.connect(rabbitSettings)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
const data = Query()

console.log(data)
