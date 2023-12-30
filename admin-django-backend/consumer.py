import pika,json, os, django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'admin.settings')
django.setup() 

from products.models import Products

params= pika.URLParameters('amqps://yxxwiazw:iD3pVL8FH5j0TQQRElCjlxYkzqQruOR1@woodpecker.rmq.cloudamqp.com/yxxwiazw')
connection = pika.BlockingConnection(params)

channel = connection.channel()

channel.queue_declare(queue='admin')



def callback(ch, method, properties, body):
    print(f'Received in admin')
    id = json.loads(body)
    print(id)
    product = Products.objects.get(id=id)
    product.likes = product.likes+1
    product.save()
    print('product likes increased')

channel.basic_consume(queue='admin', on_message_callback=callback, auto_ack=True)

print('Started Consuming')

channel.start_consuming()

channel.close()