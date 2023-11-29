const url = 'http://localhost:3000/turmas';

let idProfessor = JSON.parse(localStorage.getItem('professor'));
let turmas = document.querySelector(".turmas");

if(idProfessor == null) {
    window.location.href = '../index.html';
}

document.getElementById('nomeProfessor').innerHTML = idProfessor.nome;

fetch(url + '/' + idProfessor.id)
    .then(res => {
        return res.json();
    }).then(data =>{
        data.forEach(turma => {
            let linha = document.querySelector(".turma").cloneNode(true);

            linha.classList.remove("model");
            linha.querySelector(".turmaId").innerHTML = turma.id;
            linha.querySelector(".turmaNome").innerHTML = turma.nome;
            turmas.appendChild(linha);
        })
    }).catch(err =>[
        console.log(err)
    ])

function sair() {
    localStorage.clear();
    window.location.href = '../index.html';
}

function excluir(e){
    let id = e.parentNode.parentNode.querySelector(".turmaId").innerHTML;
    
    if(confirm("Deseja realmente excluir?")){
        fetch(url + '/' + id, {
            method: 'DELETE'
        }).then(res => {
            if(res.json() == 204){
                e.parentNode.parentNode.remove();
            }else{
                alert("Turma não pode ser excluida pois possui atividades atribuidas!");
            }
        })
    }

}