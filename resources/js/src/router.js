import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    //-----------users route-------------------
    {
      path: "/user",
      component: () => import("@/view/layout/Layout"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("@/view/pages/Dashboard.vue"),
          meta: { userType: 'user' }
        },
        {
          path: "/builder",
          name: "builder",
          component: () => import("@/view/pages/Builder.vue"),
          meta: { userType: 'user' }
        },
      ]
    },
    //-----------admin route-------------------
    {
      path: "/admin/",
      component: () => import("@/view/layout-admin/Layout"),
      children: [
        {
          path: "dashboard",
          name: "admindashboard",
          component: () => import("@/view/admin/Dashboard.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "builder",
          name: "adminbuilder",
          component: () => import("@/view/admin/Builder.vue"),
          meta: { userType: 'admin' }
        },
      ]
    },
    //-----------superadmin route-------------------
    {
      path: "/superadmin/",
      component: () => import("@/view/layout-superadmin/Layout"),
      children: [
        {
          path: "dashboard",
          name: "superadmindashboard",
          component: () => import("@/view/superadmin/Dashboard.vue"),
          meta: { userType: 'superadmin' }
        },
        {
          path: "allassociation",
          name: "superadminallassociation",
          component: () => import("@/view/superadmin/AllAssociation.vue"),
          meta: { userType: 'superadmin' }
        },
        {
          path: "newassociation/:id?",
          name: "superadminnewassociation",
          component: () => import("@/view/superadmin/NewAssociation.vue"),
          meta: { userType: 'superadmin' }
        },
      ]
    },
    //-----------for user login-------------------
    {
      path: "/",
      component: () => import("@/view/pages/auth/login_pages/Login-1"),
      children: [
        {
          name: "userlogin",
          path: "/login",
          component: () => import("@/view/pages/auth/login_pages/Login-1"),
        },
      ]
    },
    //-----------for admin login-------------------
    {
      path: "/admin/",
      component: () => import("@/view/admin/auth/login_pages/Login-1"),
      children: [
        {
          name: "adminlogin",
          path: "login",
          component: () => import("@/view/admin/auth/login_pages/Login-1"),
        },
      ]
    },
    //-----------for super admin login-------------------
    {
      path: "/superadmin/",
      component: () => import("@/view/superadmin/auth/login_pages/Login-1"),
      children: [
        {
          name: "superadminlogin",
          path: "login",
          component: () => import("@/view/superadmin/auth/login_pages/Login-1"),
        },
      ]
    },
    {
      path: "*",
      redirect: "/404"
    },
    {
      // the 404 route, when none of the above matches
      path: "/404",
      name: "404",
      component: () => import("@/view/pages/error/Error-1.vue")
    }
  ]
});
