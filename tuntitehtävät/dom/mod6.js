const vari = ["#370303", "#4d4f4d", "#9999ff", "#ffff99"];
let x = 0;

function timedAction() {
    document.getElementById("test").style.backgroundColor = vari[x];
    x = (x + 1) % vari.length;
}
let timerId = setInterval(timedAction, 100);



function snareDrum() {
    const audio = document.getElementById('snare');
    if (audio){
        audio.cloneNode().play();
    }
}

let timerSd = setInterval(snareDrum, 1000);

function bassDrum() {
    const audio = document.getElementById('bd');
    if (audio){
        audio.cloneNode().play();
    }
}

let timerBd = setInterval(bassDrum, 500); 

function hiHat() {
    const audio = document.getElementById('hh');
    if (audio){
        audio.cloneNode().play();
    }
}

let timerHh = setInterval(hiHat, 250)




document.addEventListener('keydown', function(event) {
    if (event.key === 's') { 
        const audio = document.getElementById('snare');
        if (audio) {
            audio.cloneNode().play();
        };
    }
    if (event.key === 'b') { 
        const audio = document.getElementById('bd');
        if (audio) {
            audio.cloneNode().play();
        }
    }    
});