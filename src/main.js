import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store/store";

// 引入 element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 统一默认样式
import "./assets/style/reset.css";

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
