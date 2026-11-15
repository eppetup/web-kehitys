from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/prime_number/<int:num>')
def isPrimeNum(num):
    args = request.args
    vastaus = True

    if num < 2:
        vastaus = False
    else:
        for i in range(2, num):
            if num % i == 0:
                vastaus = False
                break 
            
    return jsonify({
        "Number": num,
        "isPrime": vastaus
    })

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)