import MidGame
import GenSets
import StartPoints
import json
import time

with open("deck.json") as f:
    deck = json.load(f)

with open("table.json") as f2:
    table = json.load(f2)

timeout = time.time() + 20

sets = GenSets.genSets(deck + table)
print(MidGame.midGame(sets, deck + table, deck, timeout))

