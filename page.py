from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return redirect('/todo-list-site')

@app.route('/todo-list-site')
def site():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)