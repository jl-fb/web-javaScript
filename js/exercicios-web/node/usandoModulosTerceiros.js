const _ = require('lodash')

setInterval(() => {
    console.log(_.random(5,15))
}, 2000);

/* 
alternativa com arrow function 

setInterval(()=> console.log(_.random(1,500)), 1000)
*/

