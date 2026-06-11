var tela = document.getElementById("display")
var btns = document.getElementsByTagName("button")
var aux = ""
btns[10].style.backgroundImage = "linear-gradient(gray, red)"
function pressed(v){
    aux = aux + v
    tela.innerHTML = aux
}

function clearAll(){
    aux = "";
    tela.innerHTML = "";
}

function calculate(){
    aux = eval(aux)
    tela.innerHTML = aux
}

function backspace(){
    tela.innerHTML = aux = aux.slice(0, -1)
}

document.addEventListener("keydown", (event) => {
    const tecla = event.key;
    
    // números e operadores
    if ("0123456789+-*/.".includes(tecla)) {
        tela.innerHTML += tecla
    }

    // calcular
    if (tecla === "Enter") {
        tela.innerHTML = eval(tela.innerHTML);
    }

    // apagar
    if (tecla === "Backspace") {
        tela.innerHTML = tela.innerHTML.slice(0, -1)
    }
    
    // limpar
    if (tecla === "Escape") {
        tela.innerHTML = "";
    }
});