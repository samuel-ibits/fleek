from flask_cors import CORS
from flask import Flask, request, jsonify
app = Flask(__name__)
CORS(app)


@app.route('/post/', methods=['POST'])
def post_something():
   
    response= request.form.get('name')
    # return response
   
    # You can add the test cases you made in the previous function, but in our case here you are just testing the POST functionality
    if response:
        return jsonify({
           
            "Message": "Welcome to our awesome API!",
            # Add this option to distinct the POST request
            "METHOD": "POST"
        })
    else:
        return jsonify({
            "ERROR": "No name found. Please send a name."
        })


@app.route('/')
def index():
    # A welcome message to test our server
    return "<h1>Welcome To Fleek Loan Prediction API!</h1>"


if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(threaded=True, port=5000)