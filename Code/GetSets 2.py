def printSets(sets):
    for i,set in enumerate(sets):
        print("Set", i, "--------")
        for card in set:
            print(card["number"], card["color"])


def checkCard(data, number, color):
    for card in data["cards"]:
        if card["number"] == number and card["color"] == color:
            return True

    return False


def GetSets(cards: dict):

    sets = []
    numbersdone = []

    for card in cards["cards"]:

        color = card["color"]
        number = card["number"]
        joker = card["isjoker"]

        if joker:
            continue

        temp_set = []
        temp_set.append(
            {"number": number,
            "color": color,
            "isjoker": False
            })

        continue_loop= False
        if number < 12:
            continue_loop = True

        temp_number = number

        while continue_loop == True:

            temp_number += 1

            if checkCard(cards, temp_number, color):
                temp_set.append(
                {"number": temp_number,
                "color": color,
                "isjoker": False
                })

                if len(temp_set) > 2:
                    sets.append(temp_set[:])
            else:
                continue_loop = False

            if temp_number == 13:
                continue_loop = False

        if number in numbersdone:
            continue
        else:
            numbersdone.append(number)

        temp_set = []
        temp_set.append(
            {"number": number,
            "color": color,
            "isjoker": False
            })

        colors = ["black", "yellow", "blue", "red"]
        colors.remove(color)

        temp_colors = []

        for temp_color in colors:
            if checkCard(cards, number, temp_color):
                temp_colors.append(temp_color)

        if len(temp_colors) == 2:

            for c in temp_colors:
                temp_set.append(
                {"number": number,
                "color": c,
                "isjoker": False
                })

            sets.append(temp_set[:])

        elif len(temp_colors) == 3:

            for c in temp_colors:
                temp_set.append(
                {"number": number,
                "color": c,
                "isjoker": False
                })

            sets.append(temp_set[:])

            possibilities = [[0,1],[0,2],[1,2]]

            for pos in possibilities:

                temp_set = []
                temp_set.append(
                {"number": number,
                "color": color,
                "isjoker": False
                })

                for c in pos:
                    temp_set.append(
                    {"number": number,
                    "color": colors[c],
                    "isjoker": False
                    })

                sets.append(temp_set[:])


    return sets