import json
import os
import sys
from pprint import pprint

json_file = next((x for x in os.listdir() if '.json' in x), None)

class json_actions:
    def __init__(self, prop):
        self.data = []
        self.json_file = next((x for x in os.listdir() if '.json' in x), None)
        self.prop = prop
        if not self.json_file:
            print('no json file found')
        self.modify_json()

    def get_prop(self, item):
        return item.get(self.prop)

    def modify_json(self):
        with open(os.path.join(os.getcwd(),json_file)) as f:
            self.data = json.load(f)
            if self.prop not in self.data[0]:
                print('passed prop is not available')
                return
            self.data.sort(key=self.get_prop)

# test = json_actions(sys.argv[1])
# print(sys.argv[1])
def get_rank(item):
    return item.get('rank')

with open(os.path.join(os.getcwd(),json_file)) as f:
    data = json.load(f)
    data.sort(key=get_rank)
    with open(os.path.join(os.getcwd(),json_file), 'w') as f2:
        json.dump(data, f2, indent=4, sort_keys=True)