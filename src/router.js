import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/home/Home.vue";
import NewBook from "./pages/newbook/NewBook.vue";
import TimeToBuy from "./pages/timetobuy/TimeToBuy.vue";
import Ranking from "./pages/ranking/Ranking.vue";
import Login from "./pages/login/Login.vue";
import Register from "./pages/register/Register.vue";

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
    }, {
      path: "/ranking",
      name: "ranking",
      component: Ranking
    }, {
      path: "/login",
      name: "login",
      component: Login
    }, {
      path: "/register",
      name: "register",
      component: Register
    }]
});
