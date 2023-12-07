import { createRouter, createWebHistory } from "vue-router";

import About from "@/views/AboutView.vue";
import Works from "@/views/WorksView.vue";
import Contacts from "@/views/ContactsView.vue";

const routes = [
  {
    path: "/",
    name: "About",
    component: About,
  },
  {
    path: "/works",
    name: "Works",
    component: Works,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
