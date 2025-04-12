@app.route('/expiry', methods=['POST'])
def detect_expiry():
    # OCR placeholder for expiry date
    return jsonify({"expiry": "2025-04-15"})

if _name_ == '_main_':
    app.run(port=5001)
