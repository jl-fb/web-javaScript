function tratarErroELancar(erro){
  //throw new Error("...");
  throw 10;
}

function imprimirNomeGritando(obj){
  try {
    console.log(obj.nome.toUpperCase()+"!!!");
  } catch (e) {
    tratarErroELancar(e);
  } finally { //chama o final com erro ou não
    console.log("final");
  }
}

const obj = {nome:"Roberto"}
imprimirNomeGritando(obj);
