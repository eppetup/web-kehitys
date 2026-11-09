
    const luvut = [];
    luvut[0] = prompt("Anna 1. luku: ");
    luvut[1] = prompt("Anna 2. luku: ");
    luvut[2] = prompt("Anna 3. luku: ");

    luvut[0] = parseInt(luvut[0]);
    luvut[1] = parseInt(luvut[1]);
    luvut[2] = parseInt(luvut[2]);

    document.getElementById("summa").textContent = "Summa: " + (luvut[0] + luvut[1] + luvut[2]);
    document.getElementById("tulo").textContent = "Tulo: " + (luvut[0] * luvut[1] * luvut[2]);
    document.getElementById("ka").textContent = "Keskiarvo: " + ((luvut[0] + luvut[1] + luvut[2]) / 3);