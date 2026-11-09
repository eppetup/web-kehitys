let maara = prompt("Anna osallistujien lukumäärä:");
maara = Number(maara);

let nimet = [];

for (let i = 0; i < maara; i++) {
    let nimi = prompt(`Anna osallistujan ${i + 1} nimi:`);
    nimet.push(nimi);
}

nimet.sort()

let lista = "<ol>";
for (let i = 0; i < nimet.length; i++) {
    lista += `<li>${nimet[i]}</li>`;
}
lista += "</ol>";

document.getElementById("tulostus").innerHTML = lista;