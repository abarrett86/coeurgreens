// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import VeeValidate from 'vee-validate'
import 'element-ui/lib/theme-default/index.css'
import vueSmoothScroll from 'vue-smooth-scroll'

import '../theme/index.css'

Vue.use(ElementUI)
Vue.use(VeeValidate)
Vue.use(vueSmoothScroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App }
})
