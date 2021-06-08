function solucao(tempo, distancia) {
  const real = 100;
  let valTotal = 0;
  let valPorMinuto = 0;
  let valPorDistancia = 0;

  if (tempo < 5) {
    valTotal = 6 * real;
    console.log(valTotal);
  } else if (tempo >= 5 && tempo <= 60) {
    valPorMinuto = tempo * real;
    valPorDistancia = distancia * (real / 2);
    valTotal = valPorMinuto + valPorDistancia;
    console.log(valTotal);
  } else {
    if (distancia < 100) {
      valTotal = distancia * (real * 2);

      console.log(valTotal);
    } else {
      valTotal = distancia * (real * 1.5);
      console.log(valTotal);
    }
  }
}
