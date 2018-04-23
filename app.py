from flask import Flask, render_template, request, redirect
import MySQLdb
import json
#app = Flask(__name__)#
app = Flask(__name__, static_url_path="", template_folder="dist", static_folder="dist")

#темплейт теперь ищет в src!!!!

@app.route('/')
@app.route('/index')
def hello_world():
    return "zxc",200

@app.route('/login', methods=['GET','POST'])# get поддерживает из коробки, все остальное писать так! но если написал один дописівать и гет))))
def login():
    if request.method == 'GET':#методы. думаю понятно
      print('GET')
      return "GET "
    if request.method =='POST':
      print('POST')
    return "login"


@app.route('/getExchangeOptionsList', methods=['GET','POST'])# get поддерживает из коробки, все остальное писать так! но если написал один дописівать и гет))))
def api_getExchangeOptionsList():
    if request.method == 'GET':#методы. думаю понятно
      db = MySQLdb.connect(passwd="root", db="vanga", user="root")
      c = db.cursor()
      c.execute('SELECT id, name FROM `exchange`')
      data = c.fetchall()
      return json.dumps(data)
    if request.method =='POST':
      print('POST')
    return "login"


@app.route('/getCurrencyPairOptionsList', methods=['GET','POST'])# get поддерживает из коробки, все остальное писать так! но если написал один дописівать и гет))))
def api_getCurrencyPairOptionsList():
    if request.method == 'GET':#методы. думаю понятно
      print(request.args)
      if "exchangeId" in request.args:
        print("test")
        print(request.args.get("exchangeId"))
      db = MySQLdb.connect(passwd="root", db="vanga", user="root")
      c = db.cursor()
      c.execute('SELECT id, value FROM `exchange_pair`')
      data = c.fetchall()
      return json.dumps(data)
    if request.method =='POST':
      print('POST')
    return "login"

@app.errorhandler(404)
def page_not_found(error):
    return redirect('/')
if __name__ == '__main__':
    app.run(host='127.0.0.1', debug=True, use_reloader=True)
#
# getExchangeOptionsList exchangeId
#
# [{id: 1, value: 'Poloniex'}]
