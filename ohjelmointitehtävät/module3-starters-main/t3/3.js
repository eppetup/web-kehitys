'use strict';
const names = ['John', 'Paul', 'Jones'];
let str = "";

for (let i = 0; i < names.length; i++){
    str += `<li>${names[i]}</li>`;
}

document.getElementById("target").innerHTML = str;