import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomePage from "@/pages/HomePage.vue";
import ContactPage from "@/pages/ContactPage.vue";
import PricingPage from "@/pages/PricingPage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import ProjectsPage from "@/pages/ProjectsPage.vue";
import TestimonialsPage from "@/pages/TestimonialsPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: PricingPage
    },
    {
      path: '/testimonials',
      name:'testimonials',
      component: TestimonialsPage
    }
  ]
})

export default router
