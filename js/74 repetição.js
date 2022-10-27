!(function () {
    controllerNumeros()
})()

function controllerNumeros() {
    let listaNumeros = contarMultiplos();
    saidaResultado("Resultado: " + listaNumeros);
}

function contarMultiplos() {
    let numeros = "";
    for (let index = 1; index <= 100; index++) {
        // gera a lista
        numeros += index + "";
        //módulo
        if (index % 10 == 0) {
            numeros += "Multiplo";
        }
        numeros += ", ";

    }
    return numeros;
}
function saidaResultado(texto) {
    document.querySelector("#saidaResultado").innerHTML = texto;
}