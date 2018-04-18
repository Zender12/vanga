from flask import Flask, render_template, request, redirect


#app = Flask(__name__)#
app = Flask(__name__, static_url_path="", template_folder="dist", static_folder="dist")

#темплейт теперь ищет в src!!!!

@app.route('/')
@app.route('/index')
def hello_world():
    return render_template("index.html")

@app.route('/login', methods=['GET','POST'])# get поддерживает из коробки, все остальное писать так! но если написал один дописівать и гет))))
def login():
    if request.method == 'GET':#методы. думаю понятно
      print('GET')
      return "GET "
    if request.method =='POST':
      print('POST')
    return "login"

@app.errorhandler(404)
def page_not_found(error):
    return redirect('/')
if __name__ == '__main__':
    app.run(host='127.0.0.1', debug=True, use_reloader=True)
