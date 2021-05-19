from flask import Flask, redirect, render_template, request, jsonify, make_response
from cs50 import SQL
import uuid


app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route('/')
def index():
    return redirect("/home")

@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/game", methods=["GET", "POST"])
def calendar3():

    if request.method == "GET":

        return render_template("game.html")

    else:

        return redirect("/game.html")


if __name__ == "__main__":
    app.run(debug=True)
