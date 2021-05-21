def checkCard(data, number, color):
    if number == 14:
        return False

    for card in data:
        if card["number"] == number and card["color"] == color:
            return True

    return False


def genSets(cards: dict):
    import itertools

    groups = []
    rows = []

    numbers_done = []
    joker_count = 0

    for card in cards:
        if card["isjoker"]:
            joker_count += 1

    min_len = 3 - joker_count

    for card in cards:

        number = card["number"]
        color = card["color"]
        isjoker = card["isjoker"]

        if isjoker:
            continue

        temp_set = [{"number": number,
                     "color": color,
                     "isjoker": False
                     }]

        continue_loop = True

        temp_number = number
        temp_joker = joker_count

        while continue_loop:

            temp_number += 1

            if len(temp_set) >= min_len and temp_set[-1]["isjoker"] is False:
                rows.append(temp_set[:])

            if checkCard(cards, temp_number, color):

                temp_set.append(
                    {"number": temp_number,
                     "color": color,
                     "isjoker": False
                     })

            elif temp_joker > 0:

                temp_set.append({
                    "number": temp_number,
                    "color": color,
                    "isjoker": True
                })

                temp_joker -= 1

            elif temp_joker == 0:

                continue_loop = False

            if temp_number > 13:
                continue_loop = False

        if number in numbers_done:
            continue
        else:
            numbers_done.append(number)

        colors = ["black", "yellow", "blue", "red"]

        temp_colors = [color]

        for temp_color in colors:
            if temp_color != color:
                if checkCard(cards, number, temp_color):
                    temp_colors.append(temp_color)

        total_cards = temp_colors

        for x in range(joker_count):
            total_cards.append("joker")

        total = len(total_cards)

        iterations = []

        if total < 3:
            iterations = []
        elif total == 3:
            iterations = [3]
        elif total > 3:
            iterations = [3, 4]

        possibilities = []

        for i in iterations:
            possibilities += list(itertools.combinations(range(total), i))

        for pos in possibilities:
            t_set = []

            for p in pos:
                if total_cards[p] == "joker":
                    t_set.append({
                        "number": number,
                        "color": "",
                        "isjoker": True
                    })
                else:
                    t_set.append({
                        "number": number,
                        "color": total_cards[p],
                        "isjoker": False
                    })

            groups.append(t_set[:])

    groups2 = []

    for x in groups:
        if x not in groups2:
            groups2.append(x)

    groups = groups2

    if joker_count == 0:
        return groups + rows

    rows2 = []

    for temp_set in rows:

        jokers = 0

        for s in temp_set:
            if s["isjoker"]:
                jokers += 1

        if joker_count == jokers:
            rows2.append(temp_set[:])
            continue

        rows2.append(temp_set)

        for e in range(1, joker_count - jokers + 1):
            possibilities = list(itertools.combinations_with_replacement(range(2), e))

            for pos in possibilities:

                temp_set2 = temp_set[:]

                for p in pos:
                    if p == 0:
                        new_number = temp_set2[0]["number"] - 1
                        new_color = temp_set2[0]["color"]

                        temp_set2.insert(0, {
                            "number": new_number,
                            "color": new_color,
                            "isjoker": True
                        })
                    elif p == 1:
                        new_number = temp_set2[-1]["number"] + 1
                        new_color = temp_set2[-1]["color"]

                        temp_set2.append({
                            "number": new_number,
                            "color": new_color,
                            "isjoker": True
                        })

                joker_count2 = 0

                for card2 in temp_set2:
                    if card2["isjoker"]:
                        joker_count2 += 1

                if len(temp_set2) > 2:
                    if (temp_set2[0]["number"] >= 1 and temp_set[0]["number"] <= 13) and (
                            temp_set2[-1]["number"] <= 13 and temp_set[-1]["number"] >= 1):
                        rows2.append(temp_set2[:])

    return groups + rows2
