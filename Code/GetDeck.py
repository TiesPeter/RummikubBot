def addCard(number, color, isjoker=False, cards="None"):

        if isjoker:
            temp_dict = {"number": 0, "color": "", "isjoker": True}
        else:
            temp_dict = {"number": number, "color": color, "isjoker": False}

        cards.append(temp_dict)

def on_closing(list):

    global folder_selected

    with open(folder_selected + "\CardJSON.json", "w") as f:
        json.dump(list, f, indent=2)

    root.destroy()

def getDeck():

    import json
    from functools import partial
    from tkinter import Tk, Label, Button

    root = Tk()

    cards = []

    colors = ["black", "yellow", "blue", "red"]

    instr = Label(root, text="Create a new deck of cards. Click the buttons to start. The File will automatically be saved after you close the window")
    instr.grid(row=0, column=0, columnspan="13")

    for i in range(13):
        globals()['Black%s' % i] = Button(root, text="Black" + str(i + 1), command=partial(addCard, i + 1, "black", cards=cards), width="10", fg="white", bg="#1e1718")
        globals()['Black%s' % i].grid(row=1, column=i)

    for i in range(13):
        globals()['Yellow%s' % i] = Button(root, text="Yellow" + str(i + 1), command=partial(addCard, i + 1, "yellow", cards=cards), width="10", fg="white", bg="#eaaa2e")
        globals()['Yellow%s' % i].grid(row=2, column=i)

    for i in range(13):
        globals()['Blue%s' % i] = Button(root, text="Blue" + str(i + 1), command=partial(addCard, i + 1, "blue", cards=cards), width="10", fg="white", bg="#27499e")
        globals()['Blue%s' % i].grid(row=3, column=i)

    for i in range(13):
        globals()['Red%s' % i] = Button(root, text="Red" + str(i + 1), command=partial(addCard, i + 1, "red", cards=cards), width="10", fg="white", bg="#be0d32")
        globals()['Red%s' % i].grid(row=4, column=i)

    joker = Button(root, text="Joker", command= lambda: addCard("","",True, cards=cards), width="10", bg="#ead9ad")
    joker.grid(row=5, column=0)

    root.protocol("WM_DELETE_WINDOW", lambda: on_closing(cards))
    root.mainloop()