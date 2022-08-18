// import { Consumer, SQSMessage } from 'sqs-consumer';
// import AWS from 'aws-sdk';
import { sqs, createMessage, receiveParams, queueUrl } from './utils';

const listQueues = () => {
  sqs.listQueues({}, (error, data) => {
    console.log('list queues: ', data.QueueUrls)
  });
};

const sendMessage = (message: string) => {
  sqs.sendMessage(createMessage(message), (error, data) => {
    if (error) return console.log(error);
    console.log('Message sent: ', data.MessageId);
  });
};

const receiveMessage = () => {
  sqs.receiveMessage(receiveParams, (error, data) => {
    if (error) return console.log(error);
    console.log('Message received: ', data.Messages);
  });
};

export {
  listQueues,
  sendMessage,
  receiveMessage
}


// (async function start() {
//   interface Message {}
  
//   const queueUrl = 'http://localhost:4566/000000000000/local_queue_test';
//   const queueName = 'local_queue_test'
  
//   AWS.config.update({ region: 'ap-southeast-1' });
//   const config = {
//     endpoint: new AWS.Endpoint('http://localhost:4566'),
//     accessKeyId: 'na',
//     secretAccessKey: 'na',
//     region: 'ap-southeast-1'
//   };

//   const createParams = {
//     QueueName: queueName,
//     Attributes: {
//       'DelaySeconds': '60',
//       'MessageRetentionPeriod': '86400'
//     }
// };

//   const sqs = new AWS.SQS(config);


  // console.log(await sqs.getQueueUrl({ QueueName: 'teste' }).promise())
  // const consumer = Consumer.create({
  //   sqs: sqs,
  //   queueUrl: queueUrl,
  //   handleMessage: (message: SQSMessage) => {
  //     console.log('xxxxxxxxxxx', message.Body);
  //     return Promise.resolve();
  //   }
  // });
  
  // consumer.start();
  
  // consumer.on('message_received', () => console.log('xxxxxxxxxxx'))
  // sqs.createQueue(createParams, (error, data) => {
  //   console.log(error);
  //   console.log(data);
  // })

  
// })()

