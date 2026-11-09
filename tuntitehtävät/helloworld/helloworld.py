from flask import Flask, request

app = Flask(__name__)
@app.route('/helloworld')
def helloworld():
    args = request.args
    luku = int(args.get("luku"))

    str = luku * "hello world "
    return(str)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)