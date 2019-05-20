const valor  = 'Global';

function minhaFunction(){
  console.log(valor);
}
function exec(){
  const valor = "Local"
  minhaFunction();
}
exec();//achara o valor Global, pq foi onde foi definida
