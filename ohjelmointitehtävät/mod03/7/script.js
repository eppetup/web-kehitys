
function nopanheitto(tahkot) {
    return Math.floor(Math.random() * tahkot) + 1;
}
let tahkot = Number(prompt("Kuinka monta tahkoa nopassa on?"));

let lista = "";
let heitto;

while (true) {
    heitto = nopanheitto(tahkot);
    
    lista += `<li>Heiton tulos: ${heitto}</li>`;
    
    if (heitto === tahkot) {
        break;
    }
}
document.getElementById("tulostus").innerHTML = lista;