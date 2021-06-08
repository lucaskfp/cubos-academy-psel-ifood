function solucao(produtos) {
  let faturamentoTotal = 0;
  let totalTop = 0;
  let percentual = 0;

  produtos.forEach((produto) => {
    faturamentoTotal += produto.preco;

    if (produto.preco > 10000) {
      totalTop += produto.preco;
    }
  });

  percentual = totalTop / faturamentoTotal;

  let resultado = {
    totalTop,
    percentual,
  };

  console.log(resultado);
}
