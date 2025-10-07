let numeroDeVagas = []
let veiculos = []

function fnSalavarVeiculo(){
    numeroDeVagas.push(document.getElementById("numero_vaga").value)
    veiculos.push(document.getElementById("veiculo").value)
    console.dir(numeroDeVagas)
    console.dir(veiculos)
}

function fnListarVeiculo(){
document.getElementById("tabela_veiculos").innerHTML = ""
for(let i = 0; i < veiculos.length; i++)
}

function fnLimpar(){
    console.dir
}