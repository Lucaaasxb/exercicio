function calcularOperacao(valorTotal, porcentagem, operacao) {
  if (operacao === "acrescimo") {
    return valorTotal + (valorTotal * (porcentagem / 100));
  } else if (operacao === "desconto") {
    return valorTotal - (valorTotal * (porcentagem / 100));
  } else {
    return "Operação inválida!";
  }
}

document.getElementById('btnCalcular').addEventListener('click', () => {
  const valor = parseFloat(document.getElementById('valor').value);
  const porcentagem = parseFloat(document.getElementById('porcentagem').value);
  const operacao = document.getElementById('operacao').value;
  const resultadoSpan = document.getElementById('resultado');

  if (isNaN(valor) || isNaN(porcentagem)) {
    resultadoSpan.textContent = "Preencha todos os campos!";
    resultadoSpan.classList.remove('show');
    return;
  }

  const resultado = calcularOperacao(valor, porcentagem, operacao);
  resultadoSpan.textContent = `R$ ${resultado.toFixed(2)}`;
  resultadoSpan.classList.add('show');
});
