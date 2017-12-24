from flask import Flask,render_template,request
import json

app = Flask(__name__)
#Ctrl + Shift + R everytime
##############################################
@app.route('/')
def index():
    return render_template("index.html")



##############################################
@app.route('/eliza',methods=['POST'])
def eliza():
    recvJson = request.get_json()
    text = recvJson['elizaText']
    replyDict = {0:"Hi,how can I help you?", 1:"I see", 2:"Tell me more..", 3:"Uh huh"}
    sendJson = json.dumps({"reply": replyDict[int(text[-1])%4]})
    return sendJson

@app.route('/login',methods=['POST'])
def login():
    recvJson = request.get_json()
    sendJson = json.dumps({"login":"success"})
    # print(recvJson)
    # print(sendJson)
    # print(the_dict)
    return str(sendJson)


if __name__ == '__main__':
    app.run(debug=True)