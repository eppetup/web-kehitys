let luvut = [];

while (true) {
    let luku = Number(prompt("Anna luku:"));
    
    if (luvut.includes(luku)) {
        console.log("luku on jo annettu. ohjelma sammuu.");
        break;
    }
    
    luvut.push(luku);
}

luvut.sort((a, b) => a - b);

console.log("nouseva järjestys");
for (let i = 0; i < luvut.length; i++) {
    console.log(luvut[i]);
}