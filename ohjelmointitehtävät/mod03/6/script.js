function nopanheitto() {
    return Math.floor(Math.random() * 6) + 1;
}

let lista = "";
let heitto;

while (true) {
    heitto = nopanheitto();
    
    lista += `<li>tulos: ${heitto}</li>`;
    
    if (heitto === 6) {
        break;
    }
}
document.getElementById("tulostus").innerHTML = lista;