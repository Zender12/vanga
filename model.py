import sqlite3
import json

import MySQLdb
fail1 = open("usdt_btc.json").read()
print(fail1)
data1 = json.loads(fail1)
print(data1)

fail2 = open("USDT_BTC-300.json").read()
# print(fail2)
data2 = json.loads(fail2)
# print(data2)
db= MySQLdb.connect(passwd="root",db="vanga", user="root")
c= db.cursor()
for row in data2:
  # c.execute('''INSERT INTO exchange_history  (high, date, weightedAverage, quoteVolume, volume,close, low, open, exchange, exchange_pair) VALUES(%s, FROM_UNIXTIME(%s), %s, %s, %s, %s, %s, %s, %s, %s)  '''  % (row['high'], row['date'], row['weightedAverage'], row['quoteVolume'], row['volume'], row['close'], row['low'], row['open'], 1, 1 ))


db.commit()
