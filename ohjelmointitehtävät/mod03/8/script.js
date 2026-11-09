function concat(alkiot) {
    let str = "";
    
    for (let i = 0; i < alkiot.length; i++) {
        str += alkiot[i];
    }
    
    return str;
}

let alkiot = ["Johnny", "DeeDee", "Joey", "Marky"];
let str = concat(alkiot);
document.getElementById("tulostus").innerHTML = str;