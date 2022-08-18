import AWS from 'aws-sdk';

const queueUrl = 'http://localhost:4566/000000000000/local_queue_test';
const queueName = 'local_queue_test'

AWS.config.update({ region: 'ap-southeast-1' });
const config = {
  endpoint: new AWS.Endpoint('http://localhost:4566'),
  accessKeyId: 'na',
  secretAccessKey: 'na',
  region: 'ap-southeast-1'
};

const createParams = {
  QueueName: queueName,
  Attributes: {
    'DelaySeconds': '60',
    'MessageRetentionPeriod': '86400'
  }
};

const receiveParams = {
  QueueUrl: queueUrl,
  MaxNumberOfMessages: 10
};

const createMessage = (message: string) => {
  return {
    MessageBody: message,
    QueueUrl: queueUrl
  }
}

const sqs = new AWS.SQS(config);

export {
  sqs,
  createParams,
  config,
  queueUrl,
  queueName,
  createMessage,
  receiveParams
}

