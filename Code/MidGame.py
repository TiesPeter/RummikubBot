def midGame(sets: list, cards: dict, deck, timeout):
    import copy
    import random
    import time

    if not sets:
        return [0]

    dict_cards = {}

    for card in cards:
        if str(card) not in dict_cards:
            if card["isjoker"]:
                dict_cards["joker"] = 1
            else:
                dict_cards[str(card)] = 1
        else:
            if card["isjoker"]:
                dict_cards["joker"] += 1
            else:
                dict_cards[str(card)] += 1

    dict_deck = {}

    for d in deck:
        if str(d) not in dict_deck:
            if d["isjoker"]:
                dict_deck["joker"] = 1
            else:
                dict_deck[str(d)] = 1
        else:
            if d["isjoker"]:
                dict_deck["joker"] += 1
            else:
                dict_deck[str(d)] += 1

    random_moves = {}

    while True:

        if time.time() > timeout:

            if random_moves == {}:
                return []

            max_key = min(random_moves, key=int)

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
                    if "joker" in temp_dict2:
                        temp_dict2["joker"] -= 1
                    else:
                        possible = False
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

        remaining_cards = 0

        dict_move = {}
        dict_remain = {}

        for m in move:
            for c in m:
                if str(c) not in dict_move:
                    if c["isjoker"]:
                        dict_move["joker"] = 1
                    else:
                        dict_move[str(c)] = 1
                else:
                    if c["isjoker"]:
                        dict_move["isjoker"] += 1
                    else:
                        dict_move[str(c)] += 1

        # dict(cards) - dict(move)

        # print(move)

        for card in dict_cards:
            if card in dict_move:
                for move2 in dict_move:
                    # print(card, dict_cards[card], move2, dict_move[move2], card == move2)
                    if card == move:
                        dict_remain[card] = dict_cards[card] - dict_move[move2]
            else:
                dict_remain[card] = dict_cards[card]

        # print("dict_remain",dict_remain)

        addtolist = True

        for card in dict_remain:
            if dict_remain[card] > 0:
                if card in dict_deck:
                    if dict_deck[card] == dict_remain[card]:
                        remaining_cards += dict_remain[card]
                else:
                    addtolist = False

        # print(addtolist, remaining_cards)

        if addtolist:
            random_moves[remaining_cards] = move
