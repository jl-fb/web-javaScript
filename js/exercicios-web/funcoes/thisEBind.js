const pessoa = {
  saudacao: "Bom dia!",
  falar(){
    console.log(this.saudacao);
  }
}
pessoa.falar();
// const falar = pessoa.falar;
// falar();//conflito entre paradigmas: funcioanal e OO

//usar o bind para chamar funções dentro de objetos
const falarDePessoa = pessoa.falar.bind(pessoa)//isso fará o this apontar para pessoa sempre
falarDePessoa();


//////// OUTRA FORMA DE USAR
function Pessoa(){
  this.idade = 0;

  const self = this; //apontando para this de Pessoa
  setInterval(function(){
    /*this*/self.idade++;
    console.log(/*this*/self.idade);
  }/*.bind(this)*/, 1000)
}
new Pessoa;
