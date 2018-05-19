from flask import Flask, request, jsonify
from main import predict

app = Flask(__name__)

@app.route('/', methods=['GET'])
def get_index():
    return jsonify(
        msg='Welcome to Tim\'s hardcore machine learning stuff',
        status='running',
    )

@app.route('/', methods=['POST'])
def post_index():
    temp = request.get_json()
    pain = int(temp['pain'])
    category = int(temp['category'])
    waitingTime, queue = predict(category, pain)
    waitingTime.tolist()
    queue.tolist()

    return jsonify(
        waitingTime0=waitingTime[0],
        waitingTime1=waitingTime[1],
        waitingTime2=waitingTime[2],
        queue0=queue[0],
        queue1=queue[1],
        queue2=queue[2]
    )

if __name__ == '__main__':
    app.run(debug=True, port=3001)
