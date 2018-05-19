from flask import Flask, request, jsonify

app = Flask(__name__)

def calculate():
    pass

@app.route('/', methods=['GET'])
def get_index():
    return jsonify(
        msg='Welcome to Tim\'s hardcore machine learning stuff',
        status='running',
    )

@app.route('/', methods=['POST'])
def post_index():
    calculate()
    # mockup data for now
    return jsonify(
        [dict(name='Sahlgrenska',
        distance=1350,
        waitingTime=47,
        recommended=True
        ),
        dict(
        name='Mölndal',
        distance=750,
        waitingTime=35,
        recommended=False
        ),
        dict(
        name='Östra Sjukhuset',
        distance=2304,
        waitingTime=102,
        recommended=False
        )]
    )

if __name__ == '__main__':
    app.run(debug=True, port=3001)
