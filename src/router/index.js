import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import DocumentView from "../views/DocumentView.vue";
import XMLDataView from "../components/XmlDataGrid.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/about", name: "About", component: AboutView },
  { path: "/contact", name: "Contact", component: ContactView },
  { path: "/document", name: "Document", component: DocumentView },
  { path: "/load-data", name: "XML Data", component: XMLDataView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
