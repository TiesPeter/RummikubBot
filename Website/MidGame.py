def midGame(sets: list, cards: dict, deck, timeout):
    import copy
    import random
    import time

    loops = 0

    if not sets:
        return [0]

    dict_cards = {}

    for card in cards:
        if str(card) not in dict_cards:
            if card["isjoker"]:
                if "joker" not in dict_cards:
                    dict_cards["joker"] = 1
                else:
                    dict_cards["joker"] += 1
            else:
                dict_cards[str(card)] = 1
        else:
            dict_cards[str(card)] += 1

    dict_deck = {}

    for d in deck:
        if str(d) not in dict_deck:
            if d["isjoker"]:
                if "joker" not in dict_deck:
                    dict_deck["joker"] = 1
                else:
                    dict_deck["joker"] += 1
            else:
                dict_deck[str(d)] = 1
        else:
            dict_deck[str(d)] += 1

    random_moves = {}

    testing = 5

    while True:

        testing -= 1
        loops += 1

        if (time.time() > timeout) or (testing <= 0):

            if random_moves == {}:
                return []

            max_key = min(random_moves, key=int)

            print(loops)
            print(random_moves)
            return [max_key, random_moves[max_key]]

        sets2 = sets[:]
        move = []
        temp_dict = copy.deepcopy(dict_cards)

        print("-------new move--------------")

        possible = True

        for i in range(random.randint(1, len(sets))):

            temp_set = random.choice(sets2)
            sets2.remove(temp_set)
            temp_dict2 = copy.deepcopy(temp_dict)

            print(temp_dict2)

            for card in temp_set:
                print(card)
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
                    print("impossible")
                    possible = False

            if possible:
                move.append(temp_set)
                temp_dict = copy.deepcopy(temp_dict2)
            else:
                break

        remaining_cards = 0

        dict_move = {}
        dict_remain = {}

        print("--- add to list check ---")

        for m in move:
            for c in m:
                if c["isjoker"]:
                    if "joker" not in dict_move:
                        dict_move["joker"] = 1
                        print("joker 1")
                    else:
                        dict_move["joker"] += 1
                        print("joker += 1")
                else:
                    if str(c) not in dict_move:
                        dict_move[str(c)] = 1
                        print(str(c), "1")
                    else:
                        dict_move[str(c)] += 1
                        print(str(c), "+= 1")

        print(dict_move)

        # dict(cards) - dict(move)

        for card in dict_cards:
            if card in dict_move:
                for move2 in dict_move:
                    if card == move2:
                        dict_remain[card] = dict_cards[card] - dict_move[move2]
                        print(str(card), dict_remain[card])
            else:
                dict_remain[card] = dict_cards[card]
                print(str(card), dict_remain[card])

        addtolist = True

        print("fddfadfsaf")

        for card in dict_remain:
            print(card, dict_remain[card])
            if dict_remain[card] > 0:
                print("card is more than zero")
                if card in dict_deck:
                    print("card in personal deck")
                    if dict_deck[card] >= dict_remain[card]:
                        print("evenveel in personal deck als in overige kaarten")
                        remaining_cards += dict_remain[card]
                        print("remaining cards +", dict_remain[card])
                    else:
                        addtolist = False
                else:
                    addtolist = False
                    print("nee mag niet")

        if addtolist:
            random_moves[remaining_cards] = move
