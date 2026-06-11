var oculto = Math.floor(Math.random() * 10) + 1;
console.log(oculto);

var escolhaUsuario = "";
var numeroUsuario = 0;

document.getElementById("choiceSubmit").addEventListener("click", function(){
    var inputEscolha = document.getElementById("choiceInput").value.trim().toLowerCase();

    if (inputEscolha === "par" || inputEscolha === "ímpar" || inputEscolha === "impar") {
        escolhaUsuario = inputEscolha;
        alert("Você escolheu: " + escolhaUsuario + ". Agora digite seu número abaixo!");
    } else {
        alert("Por favor, digite apenas 'par' ou 'ímpar'.")
    }
});

document.getElementById("numberSubmit").addEventListener("click", function() {
    if (!escolhaUsuario) {
        alert("Primeiro você precisa escolher 'par' ou 'ímpar' no campo de cima!");
        return;
    }

    numeroUsuario = parseInt(document.getElementById("numberInput").value);

    if (isNaN(numeroUsuario)) {
    alert("Por favor, digite um número válido!");
    return;
    }

    var soma = numeroUsuario + oculto;

    var resultadoJogo = (soma % 2 === 0) ? "par" : "ímpar";

    var mensagem = "Você jogou " + numeroUsuario + " e o computador jogou " + oculto + ".\n" + "A soma é " + soma + " (" + resultadoJogo + ").\n\n";

    if (escolhaUsuario === resultadoJogo || (escolhaUsuario === "impar" && resultadoJogo === "ímpar")) {
    mensagem += "Você GANHOU!";
    } else {
    mensagem += "Você PERDEU!";
    }

    alert (mensagem);

    oculto = Math.floor(Math.random() * 10) + 1;
    console.log("Novo número oculto para a próxima rodada:", oculto);
});