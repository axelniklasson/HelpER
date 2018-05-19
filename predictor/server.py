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
        recommended=True,
        lat=57.6823672,
        long=11.9592431
        ),
        dict(
        name='Mölndal',
        distance=750,
        waitingTime=35,
        recommended=False,
        lat=57.6612323,
        long=12.0101488
        ),
        dict(
        name='Östra Sjukhuset',
        distance=2304,
        waitingTime=102,
        recommended=False,
        lat=57.7215131,
        long=12.0500316
        )]
    )

if __name__ == '__main__':
    app.run(debug=True, port=3001)
