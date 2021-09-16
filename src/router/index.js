import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MensComp from "../views/MensComp.vue";
import WomenComp from "../views/WomenComp.vue";
import ChildrenComp from "../views/ChildrenComp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/men",
    name: "Mens",
    component: MensComp,
  },
  {
    path: "/women",
    name: "Women",
    component: WomenComp,
  },
  {
    path: "/children",
    name: "Women",
    component: ChildrenComp,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
