import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Ripple from 'vue-ripple-directive';
import VTooltip from 'v-tooltip';

//Remove the arrow from the template
Vue.use(VTooltip, {
	defaultTemplate: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>'
});
Ripple.color = 'rgba(255, 255, 255, 0.35)';
Vue.directive('ripple', Ripple);


new Vue({
  store,
  render: h => h(App)
}).$mount('#app');