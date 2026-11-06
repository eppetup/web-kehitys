let heitot = Number(prompt("Anna heittojen määrä"));
let summa = 0;

for (let i = 0; i < heitot; i++){
    summa += Math.floor(Math.random() * 6) + 1;
}

console.log(summa)