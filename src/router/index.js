import Vue from "vue";
import VueRouter from "vue-router";
import VistaInicialDirector from "../views/VistaInicialDirector.vue";
import ModificacionCursos from "../views/ModificacionCursos.vue";
import ModificacionEstudiantes from "../views/ModificacionEstudiantes.vue";

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
  },
  {
    path: "/main",
    name: "VistaInicialDirector",
    component: VistaInicialDirector,
  },
  {
    path:"/cursos",
    name:"ModificacionCursos",
    component: ModificacionCursos,
  },
  {
    path:"/estudiantes",
    name:"ModificacionEstudiantes",
    component: ModificacionEstudiantes,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
