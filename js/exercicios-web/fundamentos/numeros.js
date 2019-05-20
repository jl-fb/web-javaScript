const peso1=1.0;
const peso2=Number('2.0');

console.log(peso1,peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1=6.871;
const avaliacao2=6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total /(peso1+peso2);
console.log(media);
console.log(media.toFixed(2)); //número de casas decimais
console.log(media.toString()); //retorna como tipo String
console.log(media.toString(2)); //retorna o número binário

//ALguns cuidados
console.log(7/0); //divisão por zero retorna um tpo Infinity, não dá erro;
console.log('10.5'/2);//Faz a divisão;
console.log('3'+2);//Irá concatenar, String tem preferência
console.log('10,4'/2);//Não faz a divisão
console.log('Sow'*2);//Não faz a repetição da string;
console.log(0.1+0.7);//Não retorna 0.8 e sim 0.799.....
