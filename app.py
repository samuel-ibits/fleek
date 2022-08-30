from flask_cors import CORS
from flask import Flask,jsonify, request
import  json
import numpy as np
import pickle as p
import joblib
import traceback
import pandas as pd
from sklearn.tree import DecisionTreeClassifier 
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score


app = Flask(__name__)
CORS(app)


@app.route('/predict', methods=['POST'])
def predict():
    
    ds = joblib.load("model/model1.pkl") # Load "model.pkl"
    print ('Model loaded')
    model_columns = joblib.load("model/model_columns1.pkl") # Load "model_columns.pkl"
    print ('Model columns loaded')

    if ds:
        try:
            json_=[]
            json_=request.get_json(json_)
 
            query = pd.get_dummies(pd.DataFrame(json_, index=[0]))
            query = query.reindex(columns=model_columns, fill_value=0)

            prediction = list(ds.predict(query))

            return jsonify({'prediction': str(prediction)})

        except:

            return jsonify({'trace': traceback.format_exc()})
    else:
         print ('Train the model first')
    return ('No model here to use')






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
   
    port = 12345 
    # If you don't provide any port the port will be set to 12345

    app.run(threaded=True,port=port, debug= True)
