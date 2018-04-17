from flask import Flask, render_template, redirect, send_from_directory
import os

app = Flask(__name__)

app = Flask(__name__, static_url_path="", static_folder='dist')
app._static_folder = os.path.abspath(os.path.dirname(__file__))
@app.route('/')
def index():
    return redirect("./dist/index.html")

@app.route("/<path:path>")
def root(path):
    """
    This is the cheesy way I figured out to serve the Angular2 app created
    by the angular-cli system. It essentially serves everything from
    static/dist (the distribution directory created by angular-cli)
    """
    return send_from_directory(os.path.join(os.getcwd(), "src/"), path)


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, use_debugger=True, use_reloader=True)
