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


@app.route('/api/exchange-options-list', methods=['GET','POST'])# get поддерживает из коробки, все остальное писать так! но если написал один дописівать и гет))))
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


@app.route('/api/currency-pair-options-list', methods=['GET','POST'])# get поддерживает из коробки, все остальное писать так! но если написал один дописівать и гет))))
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


@app.route('/api/forecasting-period-config', methods=['GET','POST'])# get поддерживает из коробки, все остальное писать так! но если написал один дописівать и гет))))
def api_getForecastingPeriodConfig():
    if request.method == 'GET':
      print(request.args)
      if "exchangeId" in request.args: pairId
        print(request.args.get("exchangeId"))

      db = MySQLdb.connect(passwd="root", db="vanga", user="root")
      c = db.cursor()
      c.execute('SELECT id, value FROM `exchange_pair`')
      data = c.fetchall()
      return json.dumps(data)

@app.route('/', methods=['GET','POST'])# get поддерживает из коробки, все остальное писать так! но если написал один дописівать и гет))))
def api_getCurrencyPairOptionsList():
    if request.method == 'GET':
      print(request.args)
      if "exchangeId" in request.args:
        print(request.args.get("exchangeId"))
      db = MySQLdb.connect(passwd="root", db="vanga", user="root")
      c = db.cursor()
      c.execute('SELECT id, value FROM `exchange_pair`')
      data = c.fetchall()
      return json.dumps(data)

@app.route('/api/diagramm-data', methods=['GET','POST'])# get поддерживает из коробки, все остальное писать так! но если написал один дописівать и гет))))
def api_getDigarammData():
    if request.method == 'GET':
      print(request.args)
      if "exchangeId" in request.args: config
        print(request.args.get("exchangeId"))
      db = MySQLdb.connect(passwd="root", db="vanga", user="root")
      c = db.cursor()
      c.execute('SELECT id, value FROM `exchange_pair`')
      data = c.fetchall()
      return json.dumps(data)

@app.route('/api/sampling-period-list', methods=['GET','POST'])# get поддерживает из коробки, все остальное писать так! но если написал один дописівать и гет))))
def api_getSamplingPeriodList():
    if request.method == 'GET':
      print(request.args)
      if "exchangeId" in request.args: pairId
        print(request.args.get("exchangeId"))
      db = MySQLdb.connect(passwd="root", db="vanga", user="root")
      c = db.cursor()
      c.execute('SELECT id, value FROM `exchange_pair`')
      data = c.fetchall()
      return json.dumps(data)

@app.route('api/forecast', methods=['GET','POST'])# get поддерживает из коробки, все остальное писать так! но если написал один дописівать и гет))))
def api_getForecast():
    if request.method == 'GET':
      print(request.args)
      if "exchangeId" in request.args: config
        print(request.args.get("exchangeId"))
      db = MySQLdb.connect(passwd="root", db="vanga", user="root")
      c = db.cursor()
      c.execute('SELECT id, value FROM `exchange_pair`')
      data = c.fetchall()
      return json.dumps(data)

@app.errorhandler(404)
def page_not_found(error):
    return redirect('/')
if __name__ == '__main__':
    app.run(host='127.0.0.1', debug=True, use_reloader=True)

TODO:
'api/currency-pair-options-list'; [{id: 1, value: 'BTC USDT'}]
'api/forecasting-period-config'; {minDate: '2018-03-07',maxDate: '2018-04-20'} SELECT MAX(`timestamp`) AS maxDate, MIN(`timestamp`) AS minDate  FROM `historylog` WHERE exchangeId = 1 AND pairId = 1
'api/exchange-options-list'; [{id: 1, value: 'Poloniex'}]
'api/sampling-period-list';[{id: 1, value: '5 min'}]
'api/diagramm-data';
{
   data: [
     {
       'name': 'Germany',
       'series': [
         {
           'name': '2010',
           'value': 7300000
         },
         {
           'name': '2011',
           'value': 8940000
         }
       ]
     },

   ],
   yLabel: 'Population',
   xLabel: 'Country'
}
'api/forecast';
{
       data: [
         {
           'name': 'Germany',
           'series': [
             {
               'name': '2010',
               'value': 7300000
             },
             {
               'name': '2011',
               'value': 8940000
             }
           ]
         },
                 {
           'name': 'France',
           'series': [
             {
               'name': '2010',
               'value': 5000002
             },
             {
               'name': '2011',
               'value': 5800000
             }
           ]
         }

       ],
       yLabel: 'Population',
       xLabel: 'Country'
}


