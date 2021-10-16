import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import VistaInicialDirector from "../views/VistaInicialDirector.vue";
import ModificacionCursos from "../views/ModificacionCursos.vue";
import ModificacionEstudiantes from "../views/ModificacionEstudiantes.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/h",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/",
    name: "VistaInicialDirector",
    component: VistaInicialDirector,
  },
  {
    path:"/cursos",
    name:"ModificacionCursos",
    component: ModificacionCursos,
  },
  {
    path:"/Estudiantes",
    name:"ModificacionEstudiantes",
    component: ModificacionEstudiantes,
  },
];

const router = new VueRouter({
  routes,
});

export default router;