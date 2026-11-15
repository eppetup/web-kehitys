document.getElementById("start").addEventListener("click", laske);

function laske(){

    const valinta = document.getElementById("operation").value;
    const luku1 = Number(document.getElementById("num1").value);
    const luku2 = Number(document.getElementById("num2").value);
    let vastaus = 0;

    switch (valinta){

        case "add":
            vastaus = luku1 + luku2;
            break;
        case "sub":
            vastaus = luku1 - luku2;
            break;        
        case "multi":
            vastaus = luku1 * luku2;
            break;
        case "div":
            vastaus = luku1 / luku2;
            break;
    }
    
    document.getElementById("result").innerHTML = vastaus;
};
