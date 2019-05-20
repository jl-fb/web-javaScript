import Vue from 'vue';
import Toasted from 'vue-toasted';

Vue.use(Toasted, {
    iconPack: 'fontawesome',
    duration: 3000,
    position: 'top-right'
})

//Registrar mensagem padrão
Vue.toasted.register(
    'defaultSuccess',
    success => !success.msg ? 'Operação realizada com sucesso!' : success.msg,
    { type: 'success', icon: 'check' }
)
Vue.toasted.register(
    'defaultError',
    //função callback para receber tipo de erro
    error => !error.msg ? 'Oops... Erro inesperado' : error.msg,
    { type: 'error', icon: 'times' }
)