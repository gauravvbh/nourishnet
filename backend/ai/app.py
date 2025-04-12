from flask import Flask, request, jsonify
from flask_cors import CORS
import base64

app = Flask(__name__)
CORS(app)  # Allow requests from the Node.js server (CORS enabled)

# Dummy ML model logic for food quality
@app.route('/quality', methods=['POST'])
def detect_quality():
    data = request.get_json()
    image_base64 = data.get('image')

    # TODO: Replace this with real ML model prediction
    print("Received food image for quality detection.")
    return jsonify({ "quality": "Fresh" })


# Dummy OCR logic for expiry date extraction
@app.route('/expiry', methods=['POST'])
def detect_expiry():
    data = request.get_json()
    image_base64 = data.get('image')

    # TODO: Add OCR code here (Tesseract, etc.)
    print("Received image for expiry date extraction.")
    return jsonify({ "expiry": "2025-04-15" })


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
