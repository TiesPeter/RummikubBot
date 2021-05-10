import json

cards = ''' 
{
   "cards": [

      {
         "id": "01",
         "language": "Java",
         "edition": "third",
         "author": "Herbert Schildt"
      },

      {
         "id": "07",
         "language": "C++",
         "edition": "second",
         "author": "E.Balagurusamy"
      }

   ]
}
'''

data_cards = json.loads(cards)  # for file use json.load(f)

# del data_cards["cards"][0]

print(data_cards)

new_data = json.dumps(data_cards, indent=2, sort_keys=True)  # for file use json.dump(data, file)

print(new_data)

