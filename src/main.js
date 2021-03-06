// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router/index.js'
import {store} from './store/store'
import Navs from '@/components/common/navs'
import '@/icons/index.js'
import Axios from "axios"

Vue.prototype.$axios = Axios
Vue.component("app-nav",Navs)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  components: { App },
  template: '<App/>'
})
