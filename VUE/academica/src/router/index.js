import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import VistaInicialDirector from "../views/VistaInicialDirector.vue";
import ModificacionCursos from "../views/ModificacionCursos.vue";
import ModificacionEstudiantes from "../views/ModificacionEstudiantes.vue";
import ModificacionHorariosSalones from "../views/ModificacionHorariosSalones.vue";


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
    path:"/estudiantes",
    name:"ModificacionEstudiantes",
    component: ModificacionEstudiantes,
  },
  {
    path:"/horarios-salones",
    name:"ModificacionHorariosSalones",
    component:ModificacionHorariosSalones,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
