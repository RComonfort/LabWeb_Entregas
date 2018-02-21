# -*- coding: utf-8 -*-
"""Archivo principal para el echobot. Main File for the echobot"""
from fbmq import Page
from flask import Flask, request
import random
import nltk

# Generated token in the facebook web page
PAGE_ACCESS_TOKEN = "EAAEyhjxiH3IBAHb3J9yzCH0ucLSC8J9EYp8yFNLnfrXGZAsI6IKbdZCZCeZBPqn6Rs8GmZA54PhNQC7wvpmeLx9em42FOZBXqcCfMfnqOmTnnOExnjijQpYr5qBL1VXJxUy10jZBsmCBAQ6fhSIiPPyLvUvLZCh3WTqMPJ4ENtQHKAZDZD"
# Token generated by us
# If you change this token, verify that you changed it too in the webhook configuration.
VERIFY_TOKEN = "EchoBotChido"

app = Flask(__name__)
page = Page(PAGE_ACCESS_TOKEN)  # We make the facebook page instance


@app.route('/')
def hello_world():
    """The server main page."""
    return 'Inicio del servidor'


@app.route('/webhook', methods=['GET', 'POST'])
def webhook():
    """This method executes as Facebook connect to us."""
    # if the message is a POST, we handle it with message_handler.
    if request.method == 'POST':
        # Facebook sends the user messages with a POST.
        page.handle_webhook(request.get_data(as_text=True))
        return 'ok'
    # if the message is a GET, we handle it here.
    elif request.method == 'GET':
        # The first you configure the webhook, FB sends a GET to your webhook to verify that it really is you, and you're not working on someone's else page.
        if request.args.get('hub.verify_token') == VERIFY_TOKEN:
            # If the verify token in the url matches our verify token we answer with the challenge to prove our identity.
            return request.args.get('hub.challenge')
        return 'Wrong Verify token'

# IMORTANT STUFF BEGINS HERE


GREETING_KEYWORDS = ("hello", "hi", "greetings", "sup",
                     "what's up", "good morning", "good afternoon", "hey")

GREETING_RESPONSES = ["Welcome", "Hello", "Hi",
                      "Greetings", "Good morning", "Good Afternoon"]

INFORMATION_REQUESTS_KEYWORDS = ['price', 'titan v', 'titan xp',
                                 '1080ti', '1080', '1070ti', '1070', '1060', 'delivery', 'discount']

INFORMATION_REQUESTS_RESPONSES = {'price': 'Our prices are in MXN: the Nvidia Titan V has a cost of $58,000\nTitan XP is $23,000\nGTX 1080Ti: $16,000\nGTX 1080 $13,499\nGTX 1070 Ti for only $11,499\nGTX 1070 is at $8,600\nGTX 1060 has a price of $6,200.\n', 'titan v': 'The Nvidia Titan V is our top of the line Graphics Card! Featuring a whopping 110 TeraFLOPS.\n',	'titan xp': 'Pascal architecture powers the Titan XP, along with 11.4Gbps/12GB G5X Memory and 3840 CUDA® Cores.', '1080ti': 'The GeForce® GTX 1080 Ti is NVIDIA\'s new flagship gaming GPU, based on the NVIDIA Pascal™ architecture.\n', '1080': 'The new GeForce GTX 1080 is meticulously crafted to offer superior heat dissipation using vapor chamber cooling technology and premium materials, so it runs as cool as it looks.\n', '1070ti': 'Play confortably @60+FPS, 1440p 21:9 aspect ratio on ultra settings for any game, on a very good price.\n', '1070': 'GeForce GTX 1070 graphics cards deliver the incredible speed and power of NVIDIA Pascal™, the most advanced gaming GPU architecture ever created.\n', '1060': 'The GeForce GTX 1060 6 GB Founders Edition graphics card is crafted by NVIDIA engineers with premium materials and components.\n', 'delivery': 'We have standard worldwide delivery for free!\n', 'discount': 'Our current online discounts range from 0% to 10%! Check out http://35.190.164.46:8083 for more.\n'}


def check_for_greeting(sentence):
    """If any of the words in the user's input was a greeting, return a greeting response"""
    for word in sentence.words:
        if word.lower() in GREETING_KEYWORDS:
            return random.choice(GREETING_RESPONSES)
    return ""


def getMessageResponse(message):
    """"check for keywords in the user message referring to information requested, attempt to return a correct response"""
    response = ""

    for word in message.words:
        if word.lower() in INFORMATION_REQUESTS_KEYWORDS:
            response += INFORMATION_REQUESTS_RESPONSES[word.lower()]

    if response == "":
        return "I'm sorry, I don't know what you are saying"


@page.handle_message
def message_handler(event):
    """Este método se ejecuta cuando nos llega un mensaje a la página. This method executes whenever a message is sent to our page."""
    sender_id = event.sender_id
    # We see if the message is a text or an attachment (image, GIF, sticker, etc)
    if event.is_text_message:

        userMessage = event.message_text.lower()

        response = check_for_greeting(response)

            response +=

        page.send(sender_id, "Hey, you send me: {}".format(response))

    elif event.is_attachment_message:
        page.send(sender_id, "I'm sorry, you have to send me text :) ")


if __name__ == '__main__':
    app.run(host="127.0.0.1", port=5000, debug=True, threaded=True)
