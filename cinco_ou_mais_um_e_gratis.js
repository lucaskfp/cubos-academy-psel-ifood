function solucao(precos) {
  if (precos.length > 0) {
    if (precos.length >= 5) {
      let menorValor = Math.min(...precos);

      precos.splice(precos.indexOf(menorValor), 1);

      let total = precos.reduce((total, valor) => total + valor);
      console.log(total);
    } else {
      let total = precos.reduce((total, valor) => total + valor);
      console.log(total);
    }
  } else {
    console.log(0);
  }
}
