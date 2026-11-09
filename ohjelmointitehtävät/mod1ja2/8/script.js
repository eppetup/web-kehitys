let alku = Number(prompt("Anna alkuvuosi:"));
let loppu = Number(prompt("Anna loppuvuosi:"));

let lista = "<ul>";

for (let vuosi = alku; vuosi <= loppu; vuosi++) {

    if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || (vuosi % 400 === 0)) {
        lista += `<li>${vuosi}</li>`;
    }
}

lista += "</ul>";

document.getElementById("tulostus").innerHTML = lista;