import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
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
    path: "/404",
    name: "404",
    component: NotFound,
    props: true,
  },
  //{
  //  path: "*",
  //  redirect: {
  //    name: "404",
  //    params: {
  //      resource: "page",
  //    },
  //  },
  //},
  { path: "/:pathMatch(.*)*", name: "404", component: NotFound },
  { path: "/:pathMatch(.*)", name: "404", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
});

export default router;
