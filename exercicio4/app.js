function fnValidarIdadeCNH(){

    event.preventDefault()
    
    let nomeUsuario =  document.getElementById('txtNome').value
    let idadeUsuario = document.getElementById('txtIdade').value

    console.log(idadeUsuario)

    if (idadeUsuario >= 18){
        texto = "Parabéns " + nomeUsuario + ", você pode dirigir"
        document.getElementById('resultado').innerHTML = texto 
    }

    else{
        texto = "Desculpe " + nomeUsuario + ", você pode dirigir"
        document.getElementById('resultado').innerHTML = texto 
    }
}
