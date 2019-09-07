import Vue from 'vue'
import VueCarousel from 'vue-carousel';
import App from './App.vue'
import store from './store';
import Icon from 'material-design-icons-iconfont';
// import vuetify from './plugins/vuetify';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faUserSecret)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueCarousel);
Vue.use(Icon);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
