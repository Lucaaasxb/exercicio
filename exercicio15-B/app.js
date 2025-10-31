let contatos = []
 
function fnSalvar(){
    let umContato = {
        nome: document.getElementById('nome').value,
        telefone: document.getElementById('telefone').value,
        email: document.getElementById('email').value,
        foto: document.getElementById('foto').value
    }
    contatos.push(umContato)
}
 
function fnListar(){
    let dados = ""
 
    contatos.forEach(function(umContato,i){
        dados += `${umContato.nome} <br> ${umContato.telefone} <br> ${umContato.email} <br> <img src='${umContato.foto}' style='width:150px; border-radius: 100px'>`
    })
 
    document.getElementById("listadeContatos").innerHTML = dados
}
 
function fnExcluir() {}
 
document.getElementById('btSalvar').addEventListener('click', function(){
    fnSalvar()
    fnListar()
})