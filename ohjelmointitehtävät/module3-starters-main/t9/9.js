document.getElementById("start").addEventListener("click", laske);

function laske(){

    let valinta = "";
    let luvut = [];
    const syote = document.getElementById("calculation").value;

    if (syote.includes('+')){
        valinta = "add";
        luvut = syote.split('+');
    }
    else if (syote.includes('-')){
        valinta = "sub";
        luvut = syote.split('-');
    }
    else if (syote.includes('*')){
        valinta = "multi";
        luvut = syote.split('*');
    }
    else if (syote.includes('/')){
        valinta = "div";
        luvut = syote.split('/');
    }

    let vastaus = 0;
    const luku1 = Number(luvut[0]);
    const luku2 = Number(luvut[1]);

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
