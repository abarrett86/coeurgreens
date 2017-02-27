// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import vueSmoothScroll from 'vue-smooth-scroll'
import ajax from './directives/ajax'

Vue.use(ElementUI)
Vue.use(vueSmoothScroll)


//directives
Vue.directive('ajax', ajax);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App }
})
