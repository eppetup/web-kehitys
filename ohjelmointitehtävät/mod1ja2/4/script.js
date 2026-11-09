let nimi = prompt("Anna nimesi");

let tupa = "";
let rng = Math.floor(Math.random() * 4) + 1;
    switch (rng) {  
        case 1:
          tupa = "Rohkelikko"
          break;
        case 2:
          tupa = "Luihunen";
          break;
        case 3:
          tupa = "Puuskupuh";
           break;
        case 4:
          tupa = "Korpinkynsi";  
          break;
    }

document.getElementById("tulos").textContent = nimi + ", sinä olet " + tupa + ".";