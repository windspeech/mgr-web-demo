import Vue from 'vue';
import 'babel-polyfill';
import ElementUI from 'element-ui';
import App from '@/apps/main.vue';
import router from '@/routes';
import store from '@/plugins/store';
import i18n from '@/plugins/i18n';

import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/style/index.scss';
import 'nprogress/nprogress.css';
import 'animate.css';

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from '@fortawesome/vue-fontawesome';

library.add(fas, far, fab);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);
// fontawesome end

// 挂载一个全局对象
GLOBAL.vbus = new Vue();

Vue.use(ElementUI);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
