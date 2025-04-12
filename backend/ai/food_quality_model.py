# Dummy image classifier for food quality
from flask import Flask, request, jsonify
import base64
app = Flask(_name_)

@app.route('/quality', methods=['POST'])
def detect_quality():
    # Here you'd add ML model prediction, return dummy for now
    return jsonify({"quality": "Fresh"})