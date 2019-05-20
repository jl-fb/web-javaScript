const escola = "Cod3r"
//Funções de String
console.log(escola.charAt(4)); //dará o índice 4
console.log(escola.charCodeAt(3));//retorna o valor ASCI
console.log(escola.indexOf('r'));//retorna o índice

console.log(escola.substring(1));//retorna o strin apartir do índice 1
console.log(escola.substring(0,3));
console.log('3'+escola);//concatena

console.log('Escola '.concat(escola).concat("!"));//concatenar. Possível chamar métodos diretamente do literal
console.log(escola.replace(3, 'e'));// substituí caracteres, possível utilizar regex
console.log("Ana,Maria,Pedro".split(","));//separa a string em arrays
console.log("Ana, Maria, Pedro".split(","));//separa a string em arrays
