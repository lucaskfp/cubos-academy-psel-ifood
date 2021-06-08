function solucao(letra, palavras) {
  let totalPerderam = 0;

  palavras.forEach((palavra) => {
    let primeiraLetra = palavra.charAt(0);

    if (primeiraLetra !== letra) {
      totalPerderam += 1;
    }
  });

  console.log(totalPerderam);
}
