function adicionarTarefa() {

    let tarefa = document.querySelector('input').value;

    if (tarefa === "") {
        alert("Digite alguma tarefa!");
        return; 
    }

    let li = document.createElement('li');
    li.innerHTML = tarefa + '<span onclick="deletarTarefa(this)">❌</span>'

    document.querySelector('ul').appendChild(li)

    document.querySelector('input').value = ""
}

function deletarTarefa(li) {
    li.parentElement.remove()
}
