import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'
import store from "@/config/store";
import './config/bootstrap';
import './config/msgs';
import router from "./config/router";

Vue.config.productionTip = false

// manipulando cabeçãlho da req no axios para "burlar" temporariamente o back
// passando um token gerado

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJqb2FvQGdtYWlsLmNvbSIsIm5hbWUiOiJKb2FvIiwiYWRtaW4iOnRydWUsImlhdCI6MTU1ODE5NDI0NiwiZXhwIjoxNTU4NDUzNDQ2fQ.6inZTTJJSyLFj9y0IFlQXm7T5eyYpYgG6PxvxNhGFKc'
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')