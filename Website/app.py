from flask import Flask, redirect, render_template, request, jsonify, make_response
import json
import time
import GenSets
import MidGame
import StartPoints

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route('/')
def index():
    return render_template("home.html")

@app.route("/home")
def home():
    return redirect("/")

@app.route("/midgame/<raw_deck>/<raw_table>")
def midgame(raw_deck, raw_table):

    raw_deck1 = json.loads(raw_deck)
    raw_table1 = json.loads(raw_table)
    timeout = time.time() + 5
    deck = []

    for key in raw_deck1.keys():

        color = ""
        number = 0
        isjoker = False

        if "black" in key:
            color = "black"
        elif "yellow" in key:
            color = "yellow"
        elif "red" in key:
            color = "red"
        elif "blue" in key:
            color = "blue"
        else:
            isjoker = True
        
        for i in range(1, 14):
            if ("," + str(i)) in key:
                number = i
    
        for _ in range(int(raw_deck1[key])):
            deck.append({
                "number": number,
                "color": color,
                "isjoker": isjoker
            })

    table = []

    for key in raw_table1.keys():

        color = ""
        number = 0
        isjoker = False

        if "black" in key:
            color = "black"
        elif "yellow" in key:
            color = "yellow"
        elif "red" in key:
            color = "red"
        elif "blue" in key:
            color = "blue"
        else:
            isjoker = True
        
        for i in range(1, 14):
            if ("," + str(i)) in key:
                number = i
    
        for _ in range(int(raw_table1[key])):
            table.append({
                "number": number,
                "color": color,
                "isjoker": isjoker
            })

    sets = GenSets.genSets(deck + table)

    res = MidGame.midGame(sets, deck + table, deck, timeout)
    
    print(res)

    return jsonify(res)

@app.route("/firstpoints/<raw_cards>")
def firstpoints(raw_cards):

    raw_cards2 = json.loads(raw_cards)
    timeout = time.time() + 5
    cards = []

    for key in raw_cards2.keys():

        color = ""
        number = 0
        isjoker = False

        if "black" in key:
            color = "black"
        elif "yellow" in key:
            color = "yellow"
        elif "red" in key:
            color = "red"
        elif "blue" in key:
            color = "blue"
        else:
            isjoker = True
        
        for i in range(1, 14):
            if ("," + str(i)) in key:
                number = i
    
        for _ in range(int(raw_cards2[key])):
            cards.append({
                "number": number,
                "color": color,
                "isjoker": isjoker
            })

    sets = GenSets.genSets(cards)

    print(sets)
    print()

    res = StartPoints.startPoints(sets, cards, timeout)
    
    print(res)

    return jsonify(res)

@app.route("/game", methods=["GET", "POST"])
def game():

    if request.method == "GET":

        return render_template("game.html")

    else:

        return redirect("/game.html")


if __name__ == "__main__":
    app.run(debug=True)
