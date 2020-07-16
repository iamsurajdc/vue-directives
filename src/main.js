import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

Vue.directive('highlight', {
  bind(el, binding) {
    // el.style.backgroundColor = binding.value;
    let delay = 0;

    if (binding.modifiers['delayed']) {
      delay = 3000
      setTimeout(() => {
        if (binding.arg) {
          el.style.background = binding.value
        } else {
          el.style.color = binding.value
        }
      }, delay);
    }

  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')