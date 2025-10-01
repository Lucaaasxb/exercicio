let listaDeNumeros = []
 
function fnLimpar(){
    document.getElementById("formulario").reset()
}
 
function fnSalvarNumero(){
    let numero = document.getElementById("numero").value
    listaDeNumeros.push(numero)
    console.log("funcionou ?" , listaDeNumeros)
}
 
function fnCaulcularMedia(){
    let media = 0, qtdNumeros = 0, somaDosNumeros = 0, i = 0
    qtdNumeros = listaDeNumeros.length
    console.log("QtdNumeros: ", qtdNumeros)
    while(i<qtdNumeros){
        somaDosNumeros += listaDeNumeros[i]
        i++
    }
    console.log("Soma: ", somaDosNumeros)
    media = somaDosNumeros / qtdNumeros
    document.getElementById("media").innerHTML = media

    listaDeNumeros = []
}