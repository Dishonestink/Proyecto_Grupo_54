import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Sesion",
    component: () =>
      import("../views/Sesion.vue"),
  },
  {
    path: '/register',
    name: "Register",
    component: () => 
      import("../views/Register.vue"),
  },
  {
    path: '/acount-miss',
    name: "AcountMiss",
    component: () => 
      import("../views/AcountMiss.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
