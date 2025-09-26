function fnRepetirFrase(){
    let qtd = 0, frase = "", contador = 0

    frase = document.getElementById("frase").value
    qtd = document.getElementById("qtd").value
    document.getElementById("lista_frases").innerHTML = ""
    while (contador < qtd) {
       document.getElementById("lista_frases").innerHTML += "<li>" = frase + "</li>"
        contador++ // contador = conatdor + 1
    }
}