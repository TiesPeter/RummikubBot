def _30points2(sets: list, cards: dict, timeout):
    import copy
    import random
    import time

    if not sets:
        return [0]

    dict_cards = {}

    for card in cards["cards"]:
        if str(card) not in dict_cards:
            dict_cards[str(card)] = 1
        else:
            dict_cards[str(card)] += 1

    random_moves = {}

    while True:

        if time.time() > timeout:
            for i in random_moves:
                print("max", i, "len set", len(random_moves[i]))

            max_key = max(random_moves, key=int)

            if max_key < 30:
                return [max_key]
            else:
                return [max_key, random_moves[max_key]]

        sets2 = sets[:]
        move = []
        temp_dict = copy.deepcopy(dict_cards)

        for i in range(random.randint(1, len(sets))):

            temp_set = random.choice(sets2)
            sets2.remove(temp_set)
            possible = True
            temp_dict2 = copy.deepcopy(temp_dict)

            for card in temp_set:
                if card["isjoker"]:
                    if "{'number': 0, 'color': '', 'isjoker': True}" in temp_dict2:
                        temp_dict2["{'number': 0, 'color': '', 'isjoker': True}"] -= 1
                elif str(card) in temp_dict2:
                    temp_dict2[str(card)] -= 1
                else:
                    possible = False

            for k in temp_dict2:
                if temp_dict2[k] < 0:
                    possible = False

            if possible:
                move.append(temp_set)
                temp_dict = copy.deepcopy(temp_dict2)
            else:
                pass


        total_points = 0

        for s in move:
            for c in s:
                total_points += c["number"]

        random_moves[total_points] = move