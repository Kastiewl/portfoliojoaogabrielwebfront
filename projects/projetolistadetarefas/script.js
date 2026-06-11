var input = document.getElementById("taskInput");
var button = document.getElementById("addTaskBtn");
var list = document.getElementById("taskList");

carregarTarefas();

button.addEventListener("click", function () {
    var texto = input.value;

    if (texto == "") {
        alert("Digite alguma coisa")
    }
    else{
        criarTarefa(texto);
        salvarTarefas();

    input.value = ""; 
    }
});

function criarTarefa(texto) {
    var li = document.createElement("li");
    var buttonRemove = document.createElement("button");

    li.appendChild(document.createTextNode(texto));

    buttonRemove.textContent = "x";

    buttonRemove.onclick = function () {
        remove(li);
    };

    li.appendChild(buttonRemove);
    list.appendChild(li);
}

function remove(li) {
    li.parentNode.removeChild(li);
    salvarTarefas();
}

function salvarTarefas() {
    var tarefas = [];

    var itens = list.getElementsByTagName("li");

    for (var i = 0; i < itens.length; i++) {
        tarefas.push(itens[i].childNodes[0].textContent);
    }

    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function carregarTarefas() {
    var tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

    for (var i = 0; i < tarefas.length; i++) {
        criarTarefa(tarefas[i]);
    }
}