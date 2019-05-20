const valores = [7.7,8,6.3];
console.log(valores[0], valores[2]);
console.log(valores[3]);//irá retornar undefined e não um erro;

valores[3] = 10; //irá add o 10 no índice 4 do array

console.log(valores.length);//tamanho do array, no caso 4 índices;

valores.push({id: 2},null,false,"teste");//add valores ao array
console.log(valores);
console.log(valores.length); // 8

console.log(valores.pop());//retona e deleta último valor (e índice) do array
console.log(valores.length);// 7

delete valores[1];//deleta valor do índice indicado, mas não o índice
console.log(valores);
console.log(valores.length); // 7
