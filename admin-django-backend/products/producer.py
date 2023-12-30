# amqps://yxxwiazw:iD3pVL8FH5j0TQQRElCjlxYkzqQruOR1@woodpecker.rmq.cloudamqp.com/
import pika, json
params= pika.URLParameters('amqps://yxxwiazw:iD3pVL8FH5j0TQQRElCjlxYkzqQruOR1@woodpecker.rmq.cloudamqp.com/yxxwiazw')
connection = pika.BlockingConnection(params)

channel = connection.channel()

def publish(method, body):
    properties = pika.BasicProperties(method)
    channel.basic_publish(exchange='', routing_key='main', body=json.dumps(body), properties=properties)