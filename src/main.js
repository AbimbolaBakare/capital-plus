import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import AOS from "aos";
import "aos/dist/aos.css";


Vue.use(VueRouter);
const vuetifyOptions = {}
Vue.use(Vuetify);
Vue.use(AOS);



Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router,
  created() {
    AOS.init({
      disable: "phone"
    });
  },
  vuetify: new Vuetify(vuetifyOptions),
  components: {
    App
  }
}).$mount('#app')