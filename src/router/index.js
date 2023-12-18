import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/:pathMatch(.*)",
    name: "notfound",
    component: () => import("../views/NotFound"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/auth/Login"),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('auth')) {
        next('/dashboard')
      } else {
        next()
      }
    }
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/auth/Register")
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../views/users/Index")
  },
  {
    path: "/edituser/:id",
    name: "edituser",
    component: () => import("../views/users/Edit")
  },
  {
    path: "/activos-fijos",
    name: "activos-fijos",
    component: () => import("../views/activosFijos/Index")
  },
  {
    path: "/formualarios",
    name: "formularios",
    component: () => import("../views/activosFijos/Formulario")
  },
  {
    path: "/inventario-activos-fijos",
    name: "inventario",
    component: () => import("../views/activosFijos/Inventario")
  },
  ,
  {
    path: "/activos-fijos-relevo",
    name: "relevo",
    component: () => import("../views/activosFijos/Relevo")
  },
  {
    path: "/activos-fijos-rubros",
    name: "rubros",
    component: () => import("../views/activosFijos/Rubros")
  },
  {
    path: "/transferencias",
    name: "transferencias",
    component: () => import("../views/activosFijos/Transferencia")
  },
  {
    path: "/armas",
    name: "armas",
    component: () => import("../views/armas/Armas")
  },
  {
    path: "/contratos",
    name: "contratos",
    component: () => import("../views/contratos/Index")
  },
  {
    path: "/contratos/:id",
    name: "contratoDetails",
    component: () => import("../views/contratos/ContratoDetails")
  },
  {
    path: "/institutions",
    name: "institutions",
    component: () => import("../views/institutions/Index")
  },
  {
    path: "/institutions/:id",
    name: "institutionDetails",
    component: () => import("../views/institutions/InstitutionDetails")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/Dashboard.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/seguimientos",
    name: "seguimientos",
    component: () => import("../views/seguimientos/Index")
  },
  {
    path: "/grafico",
    name: "grafico",
    component: () => import("../views/seguimientos/Grafico")
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const protectedRoute = to.matched.some(record => record.requiresAuth);
  if (protectedRoute && localStorage.getItem('auth')) {
    next('/login');
  } else {
    next();
  }
});
export default router;
