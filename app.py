from flask import Flask, render_template, request

#app = Flask(__name__)#
app = Flask(__name__, template_folder="src")
#темплейт теперь ищет в src!!!!

@app.route('/')
def hello_world():
    return render_template("index.html")

@app.route('/login', methods=['GET','POST'])# get поддерживает из коробки, все остальное писать так! но если написал один дописівать и гет))))
def login():
    if request.method == 'GET':#методы. думаю понятно
      print('GET')
    if request.method =='POST':
      print('POST')
    return "login"

if __name__ == '__main__':
    app.run(host='127.0.0.1', debug=True, use_reloader=True)
