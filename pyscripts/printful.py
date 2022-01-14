import requests
import json

headers= {"Content-Type":"application/json"}

def get_products():
    url = "https://api.printful.com/products"
    r = requests.get(url,headers=headers)
    response = r.json()
    results = response["result"]
    #print(results[0])
    #res = {'id': 1, 'type': 'POSTER', 'type_name': 'Enhanced Matte Paper Poster (in)', 'title': 'Enhanced Matte Paper Poster (in)', 'brand': None, 'model': 'Enhanced Matte Paper Poster (in)', 'image': 'https://files.cdn.printful.com/o/products/1/product_1613463122.jpg', 'variant_count': 11, 'currency': 'USD', 'files': [{'id': 'default', 'type': 'default', 'title': 'Print file', 'additional_price': None}, {'id': 'preview', 'type': 'mockup', 'title': 'Mockup', 'additional_price': None}], 'options': [], 'dimensions': {'8×10': '8×10', '10x10': '10x10', '12×12': '12×12', '12×16': '12×16', '12×18': '12×18', '14×14': '14×14', '16×16': '16×16', '16×20': '16×20', '18×18': '18×18', '18×24': '18×24', '24×36': '24×36'}, 'is_discontinued': False, 'avg_fulfillment_time': None, 'description': 'Museum-quality posters made on thick and durable matte paper. Add a wonderful accent to your room and office with these posters that are sure to brighten any environment.\r\n\r\n• Paper thickness: 10.3 mil\r\n• Paper weight: 5.57 oz/y² (189 g/m²)\r\n• Giclée printing quality\r\n• Opacity: 94%\r\n• ISO brightness: 104%'}


def product_info(product):
    listing = product['id']
    type = product['type']
    name = product['type_name']
    sizes = product['variant_count']
    decription = product['description']
    dimensions = product['dimensions']
    print(name, sizes,sep='\n')


def shipping_rates():
    content = {
                "recipient": {
                            "address1": "19749 Dearborn St",
                            "city": "Chatsworth",
                            "country_code": "US",
                            "state_code": "CA",
                            "zip": 91311,
                            "phone": "string"
                        },
                "items": [
                            {
                            "variant_id": "202",
                            "external_variant_id": "1001",
                            "warehouse_product_variant_id": "2",
                            "quantity": 10,
                            "value": "2.99"
                            }
                        ],
                "currency": "USD",
                "locale": "en_US"
                }
    send = requests.post("https://api.printful.com/shipping/rates",data=json.dumps(content),headers=headers)
    #need to add header with api key
    print(send.json())

