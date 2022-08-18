


## iniciar
| sudo docker-compose up

## criação de fila
| $ aws --endpoint-url=http://localhost:4566 sqs create-queue --queue-name teste
| {
|    "QueueUrl": "http://localhost:4566/queue/teste"
| }


## envio de mensagem para fila
| $ aws --endpoint-url=http://localhost:4566 sqs send-message --queue-url http://localhost:4566/queue/teste --message-body "Mensagem de teste"
| {
|     "MD5OfMessageBody": "4449beea32141ebd982d823daa49a542", 
|     "MD5OfMessageAttributes": "d41d8cd98f00b204e9800998ecf8427e", 
|     "MessageId": "e9dcd4ab-871b-4dd4-a7b7-8426a8bfb5e0"
| }


## leitura de mensagem
| $ aws --endpoint-url=http://localhost:4566 sqs receive-message --queue-url http://localhost:4566/queue/teste --max-number-of-messages 10                                                              
| {
|     "Messages": [
|         {
|             "Body": "Mensagem de teste", 
|             "ReceiptHandle": "e9dcd4ab-871b-4dd4-a7b7-8426a8bfb5e0#2c7aaba2-3385-459b-9dd2-d4e7fc0d6ac7", 
|             "MD5OfBody": "4449beea32141ebd982d823daa49a542", 
|             "MessageId": "e9dcd4ab-871b-4dd4-a7b7-8426a8bfb5e0"
|         }
|     ]
| }