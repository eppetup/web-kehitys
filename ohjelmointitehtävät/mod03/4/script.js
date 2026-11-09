let luvut = [];
let i = 0;

while (true){
    i += 1;
    let luku = Number(prompt(`Anna ${i}. luku (0 lopettaa)`));
    if (luku === 0){
        break;
    }
    luvut.push(luku);
}

luvut.sort((a, b) => b - a);

console.log("suurimmasta pienimpään");
for (let i = 0; i < luvut.length; i++){
    console.log(luvut[i]);
}   