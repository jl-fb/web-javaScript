function rand([min=0,max=1000]){
  if (min>max) {
    [min,max] = [max,min];
    //1º notação destructing, 2º notação array
      const valor = Math.random()*(max-min)+min;
      return Math.floor(valor);
  }
}
console.log(rand([8,80]));
console.log(rand([, 5]));
console.log(rand([99,]));
console.log(rand([]));