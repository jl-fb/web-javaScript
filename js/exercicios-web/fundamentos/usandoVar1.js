{
  {
    {
      {
        var sera = 'Será??';
        let sera2 = 'Será';
      }
    }
  }
}
console.log(sera); //irá mostrar a variável, não importando se esta no bloco ou não;

//   console.log(sera2);//Dirá que variável "is not defined" ///

 function teste(){
   var local = 23; //Dentro de uma funcao, variável é declarada localmente

 }
 //   console.log(local); // local is not defined ///

var numero = 1;
{
  var numero=2;
  console.log('dentro =', numero);
}
console.log('fora =',numero); // imprime 2 sempre, pois var declara sempre de modo global, menos dentro de funcao
