import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Widgets from 'fusioncharts/fusioncharts.widgets'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
import VueCompositionAPI from '@vue/composition-api';
import App from './App.vue';
import router from './router';

Vue.use(VueFusionCharts, FusionCharts, Widgets, FusionTheme)
Vue.use(VueCompositionAPI);
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
