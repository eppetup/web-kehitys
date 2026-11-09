let nimet = [];

for (let i = 0; i < 6; i++){
    let nimi = prompt(`Anna nimi (${i + 1}/6)`);
    nimet.push(nimi);
}

nimet.sort().reverse();


document.getElementById("tulostus").innerHTML = "<ul>";
for (let i = 0; i < nimet.length; i++) {
    document.getElementById("tulostus").innerHTML += `<li>${nimet[i]}</li>`;
}
document.getElementById("tulostus").innerHTML += "</ul>";