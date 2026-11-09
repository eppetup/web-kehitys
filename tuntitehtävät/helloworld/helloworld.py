import json
from flask import Flask, request, Response

app = Flask(__name__)
@app.route('/helloworld')
def helloworld():
    try:
        args = request.args
        luku = int(args.get("luku"))

        str = luku * "hello world "
        return(str)
    except ValueError:
        response = {
            "message": "Invalid number as addend",
            "status": 400
        }
        json_response = json.dumps(response)
        http_response = Response(response=json_response, status=400, mimetype="application/json")
        return http_response

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)