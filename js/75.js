!(function () {
    controllerNumeros();
})()

function controllerNumeros() {
    let listaNumeros = contarMultiplos();
    saidaResultado("Resultado: " + listaNumeros);
}

function contarMultiplos() {
    let numeros = "";
    for (let index = 100; index <= 200; index++) {
        if ((index % 2) != 0) {
            numeros += index + ", ";
        }
    }
    return numeros;
}
function saidaResultado(texto) {
    document.querySelector("#saidaResultado").innerHTML = texto;
}