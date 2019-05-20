/* commons JS */
//const Pessoa = require('./pessoa')

/* sistema módulos do ES6 */
import Pessoa from "./pessoa"
//import './modulos/moduloA'
import './assets'

const atendente = new Pessoa
console.log(atendente.cumprimentar())