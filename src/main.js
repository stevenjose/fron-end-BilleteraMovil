import Vue from "vue";
import VueSweetalert2 from 'vue-sweetalert2';
 import 'sweetalert2/dist/sweetalert2.min.css';

//import App from "./App.vue";
import VueRouter from "vue-router";
Vue.use(VueRouter,VueSweetalert2);
Vue.config.productionTip = false;

import RegistrarCliente from './components/RegistrarCliente.vue';
import ConsultarBilletera from './components/ConsultarBilletera.vue';
import RecargarBilletera from './components/RecargarBilletera.vue';
import RegistrarPago from './components/RegistrarPago.vue';

import App from './App.vue'
const routes = [
  { path: '/consultarBilletera', component: ConsultarBilletera },
  { path: '/registroCliente', component: RegistrarCliente },
  { path: '/recargarBilletera', component: RecargarBilletera },
  { path: '/registrarPago', component: RegistrarPago },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
