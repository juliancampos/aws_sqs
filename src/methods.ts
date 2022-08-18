import { listQueues, receiveMessage, sendMessage } from './sqs';

const start = () => {
  const methods: {[key: string]: Function} = {
    list: listQueues,
    receive: receiveMessage,
    send: sendMessage
  }
  methods[process.argv[2]](process.argv[3]);
}

export {
  start
}
