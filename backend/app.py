from flask import Flask, request, jsonify, make_response
from flask_restx import Api, Resource, fields
from flask_cors import CORS
import numpy as np
import sys
import pickle

flask_app = Flask(__name__)
CORS(flask_app)
app = Api(app=flask_app,
          version="1.0",
          title="Salary tracker",
          description="Predict results using a trained model")


name_space = app.namespace('prediction', description='Prediction APIs')

model = app.model('Prediction params',
                  {'years': fields.Integer(required=True,
                                           description="Years of Experience",
                                           help="Years cannot be blank"),

                   })

# classifier = joblib.load('classifier.joblib')
filename = 'final_model1.sav'
regressor = pickle.load(open(filename, 'rb'))


@name_space.route("/")
class MainClass(Resource):

    def options(self):
        response = make_response()
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers.add('Access-Control-Allow-Headers', "*")
        response.headers.add('Access-Control-Allow-Methods', "*")
        return response

    @app.expect(model)
    def post(self):
        try:
            formData = request.json
            data = [val for val in formData.values()]

            prediction = regressor.predict(
                np.array(data, dtype=float).reshape(-1, 1))

            response = jsonify({
                "statusCode": 200,
                "status": "Prediction made",
                "result": "The predicted salary (in dollars) :  "+str(prediction[0].round(2))
            })
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response
        except Exception as error:
            return jsonify({
                "statusCode": 500,
                "status": "Could not make prediction",
                "result": "Please review your response and try again",
                "error": str(error)
            })
