import os
import time
from functools import partial
from tkinter import *


def cls():
    os.system('cls' if os.name == 'nt' else 'clear')


def addCardDeck(number, color, isjoker=False):
    # add card to json file

    global deck

    if isjoker:
        temp_dict = {"number": 0, "color": "", "isjoker": True}
    else:
        temp_dict = {"number": number, "color": color, "isjoker": False}

    deck.append(temp_dict)


def addCardTable(number, color, isjoker=False):
    # add card to json file

    global table

    if isjoker:
        temp_dict = {"number": 0, "color": "", "isjoker": True}
    else:
        temp_dict = {"number": number, "color": color, "isjoker": False}

    table.append(temp_dict)


cls()

deck = []
table = []
sets = []

print("Welcome, this is RummikubBot! Use the following commands to start:")

while True:
    print()
    print("0. Quit")
    print("1. Create/Modify a list of personal cards or table cards")
    print("2. Check if you can get 30 points using your personal cards by generating groups and runs")
    print("3. Generate a move using your deck and the table cards")
    print()

    valid_input = False
    user_input0 = ""

    while not valid_input:
        user_input0 = input("Enter a number to start >> ")

        if user_input0.isdigit() and int(user_input0) in range(4):
            valid_input = True
        else:
            print("Invalid input, try again")

    cls()

    if user_input0 == "0":
        # 0. Quit
        quit()
    elif user_input0 == "1":
        # 1. Create/Modify a list of personal cards or table cards

        print("1. Create/Modify a list of personal cards or table cards")
        print()
        # Check if you want to use Tkinter and if Tkinter is installed

        print("What would you like to do?")
        print()
        print("0. Create a new list of personal cards")
        print("1. Modify a list of personal cards")
        print("2. Create a new list of table cards")
        print("3. Modify a list of table cards")
        print()

        valid_input1 = False
        user_input1 = ""

        while not valid_input1:
            user_input1 = input("Enter a number >> ")

            if user_input1.isdigit() and int(user_input1) in range(4):
                valid_input1 = True
            else:
                print("Invalid input, try again")

        print()
        print("Would you like to use Tkinter to display a GUI for easier use?")
        print()
        user_input2 = input("y / n >> ").lower()

        if user_input2 == "y" or user_input2 == "yes":
            # Use Tkinter to display a GUI

            root = Tk()
            colors = ["black", "yellow", "blue", "red"]
            instr = Label(root,
                          text="Create a new deck of cards. Click the buttons to start. The File will automatically be saved after you close the window")
            instr.grid(row=0, column=0, columnspan="13")
            for i in range(13):
                globals()['Black%s' % i] = Button(root, text="Black" + str(i + 1),
                                                  command=partial(addCardDeck, i + 1, "black"), width="10", fg="white",
                                                  bg="#1e1718")
                globals()['Black%s' % i].grid(row=1, column=i)
            for i in range(13):
                globals()['Yellow%s' % i] = Button(root, text="Yellow" + str(i + 1),
                                                   command=partial(addCardDeck, i + 1, "yellow"), width="10", fg="white",
                                                   bg="#eaaa2e")
                globals()['Yellow%s' % i].grid(row=2, column=i)
            for i in range(13):
                globals()['Blue%s' % i] = Button(root, text="Blue" + str(i + 1),
                                                 command=partial(addCardDeck, i + 1, "blue"), width="10", fg="white",
                                                 bg="#27499e")
                globals()['Blue%s' % i].grid(row=3, column=i)
            for i in range(13):
                globals()['Red%s' % i] = Button(root, text="Red" + str(i + 1), command=partial(addCardDeck, i + 1, "red"),
                                                width="10", fg="white", bg="#be0d32")
                globals()['Red%s' % i].grid(row=4, column=i)
            joker = Button(root, text="Joker", command=lambda: addCardDeck("", "", True), width="10", bg="#ead9ad")
            joker.grid(row=5, column=0)
            root.mainloop()

        elif user_input2 == "n" or user_input2 == "no":
            # Use the console

            # Create a new list

            # Modify a list
            pass

        cls()

    elif user_input0 == "2":
        # 2. Check if you can get 30 points using your personal cards by generating groups and runs

        # Error handling
        error = False
        if not deck:
            print("! Make sure you have input your PERSONAL CARDS, using command: 1")
            time.sleep(1)
            error = True

        if not error:
            cls()
            # The Magic

    elif user_input0 == "3":
        # 3. Generate a move using your deck and the table cards

        # Error handling
        error = False
        if not deck or not table:
            print("! Make sure you have input your PERSONAL CARDS and the TABLE CARDS, using command: 1")
            time.sleep(1)
            error = True

        if not error:
            cls()
            # The Magic