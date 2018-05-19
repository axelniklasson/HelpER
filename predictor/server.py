from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/")
def hello():
    return jsonify(
        msg='Welcome to Tim\'s hardcore machine learning stuff',
        status='running',
    )

if __name__ == '__main__':
    app.run(debug=True, port=3001)
