function verificarNumero() {
    let numero = document.getElementById("numero").value;
    let paridade = document.getElementById("paridade");
    let sequencia = document.getElementById("sequencia");

if (numero % 2 === 0) {
    paridade.innerHTML = "O número " + numero + " é Par."
} else {
    paridade.innerHTML = "O número " + numero + " é Ímpar."
}

let resultado = "Números de 0 até " + numero + ": ";
for (let i = 0; i <= numero; i++) {
    resultado += i + " ";
}
sequencia.innerHTML = resultado;

}