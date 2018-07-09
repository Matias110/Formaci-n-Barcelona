//Posicionar jugadores
function permitir(ev) {
    ev.preventDefault();
}

function arrastrar(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function soltar(ev) {
    ev.preventDefault();
    var pegar = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(pegar));
}