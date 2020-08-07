import json
import os
from pprint import pprint

print(os.listdir())

json_file = next((x for x in os.listdir() if '.json' in x), None)

def get_rank(item):
    return item.get('rank')

with open(os.path.join(os.getcwd(),json_file)) as f:
    data = json.load(f)
    data.sort(key=get_rank)
    with open(os.path.join(os.getcwd(),json_file), 'w') as f2:
        json.dump(data, f2)