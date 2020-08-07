import json
import os
from pprint import pprint

json_file = next((x for x in os.listdir() if '.json' in x), None)

class json_actions:
    def __init__(self):
        self.data = []
        self.json_file = next((x for x in os.listdir() if '.json' in x), None)
        if not self.json_file:
            print('no json file found')
        else:
            print('json file found')
    def modify_json(self):
        with open(os.path.join(os.getcwd(),json_file)) as f:
            self.data = json.load(f)
            self.data.sort(key=get_rank)

# def get_rank(item):
#     return item.get('rank')

# with open(os.path.join(os.getcwd(),json_file)) as f:
#     data = json.load(f)
#     data.sort(key=get_rank)
#     with open(os.path.join(os.getcwd(),json_file), 'w') as f2:
#         json.dump(data, f2)