const form = document.getElementById("source");

form.addEventListener('submit', funktio);

function funktio(e){
    e.preventDefault();

    const etu = form.firstname.value;
    const suku = form.lastname.value;
    document.getElementById("target").textContent = `Nimesi on ${etu} ${suku}`;
}