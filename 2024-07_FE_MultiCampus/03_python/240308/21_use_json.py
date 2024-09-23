import json, requests # json 형태로 데이터를 주고 받을 때 사용

obj = {
    'name' : 'son',
    'age' : 30
}

json_str = json.dumps(obj)
print(json_str)
print(type(json_str))

json_obj = json.loads(json_str)
print(json_obj)
print(type(json_obj))

res = requests.get('https://dummyjson.com/products/1')
print(res.status_code)
print(res.text)
print(type(res.text))
json_res_text = json.loads(res.text)
print(json_res_text["title"])

# res = requests.get('https://google.com')
# print(res.text)