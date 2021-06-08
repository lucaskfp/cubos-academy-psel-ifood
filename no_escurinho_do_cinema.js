function solucao(obj) {
  if (obj.temIngresso && (obj.idade >= obj.censura || obj.estaComPais)) {
    if (obj.temCarteirinha || obj.idade < 18) console.log("MEIA");
    else console.log("INTEIRA");
  } else {
    console.log("ACESSO NEGADO");
  }
}
