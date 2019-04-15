import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/home/Home.vue";
import NewBook from "./pages/newbook/NewBook.vue";
import TimeToBuy from "./pages/timetobuy/TimeToBuy.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',   // 路由地址不出现"#"
 
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    }, {
      path: "/newbook",
      name: "newbook",
      component: NewBook
    }, {
      path: "/timetobuy",
      name: "timetobuy",
      component: TimeToBuy
    }]
});
