function solucao(largura, altura) {
  if (altura === largura) {
    console.log("QUADRADA");
  } else if (altura > largura) {
    console.log("RETRATO");
  } else {
    console.log("PAISAGEM");
  }
}
