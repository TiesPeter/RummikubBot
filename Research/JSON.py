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

data_cards = json.loads(cards)

print(data_cards["book"])

