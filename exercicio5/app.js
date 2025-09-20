function fnVerificarPeriodo(){
    let periodoSelecionado = document.getElementById("periodo").value

    //document.getElementById("resposta").innerText = periodoSelecionado

    if(periodoSelecionado == "d"){
        document.getElementById("resposta").innerText = "Dia 🌄"
        document.body.style.backgroundColor = "#b4edff"
        document.body.style.color = "#3b3b3b"
    }else if(periodoSelecionado == "t"){
        document.getElementById("resposta").innerText = "Tarde 🌇"
        document.body.style.backgroundColor = "#f77f30"
        document.body.style.color = "#1b1b1b"
    }else if(periodoSelecionado == "n"){
        document.getElementById("resposta").innerText = "Noite 🌃"
        document.body.style.backgroundColor = "#283147"
        document.body.style.color = "#fff7f7"
    }else{
        document.getElementById("resposta").innerText = ""
        document.body.style.backgroundColor = "#f9c9ff"
        document.body.style.color = "#3b3b3b"
    }

}