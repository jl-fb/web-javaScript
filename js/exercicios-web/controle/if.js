function onlyGoodGrade(nota){
  if (nota>=7) {
    console.log("Aprovado com " + nota);
  }
}
onlyGoodGrade(8);
onlyGoodGrade(5,5);

function seForVerdadeEuFalo(valor){
  if (valor) {
    console.log("É verdadeiro... "+valor);
  }
}
seForVerdadeEuFalo();
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo("");
seForVerdadeEuFalo(-8);
seForVerdadeEuFalo(' ');


//////// IF ELSEIF ELSE /////////////

Number.prototype.entre = function (inicio, fim){
  return this >= inicio && this <= fim;
}

const imprimirResultado = function (nota){
  if(nota.entre(9,10)){
    console.log("Quadro de Honra");
  }else if (nota.entre(7,8.99)) {
    console.log("Aprovado");
  }else if (nota.entre(4,6.99)) {
    console.log("Recuperação");
  }else if (nota.entre(0,3.99)) {
    console.log("Reprovado");
  }else {
    console.log("Nota inválida");
  }
}
imprimirResultado(7);
