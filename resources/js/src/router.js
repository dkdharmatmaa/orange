import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
     //-----------users route-------------------
     {
      path: "/",
      redirect: "/entry",
      component: () => import("@/view/layout/Layout"),
      children: [
        {
          path: "/entry",
          name: "user-entry",
          component: () => import("@/view/pages/Entry.vue"),
          meta: { userType: 'user' }
        },
        {
          path: "report",
          name: "user-report",
          component: () => import("@/view/pages/Report.vue"),
          meta: { userType: 'user' }
        },
        {
          path: "report-detail/:id",
          name: "admin-report-detail",
          component: () => import("@/view/pages/ReportDetail.vue"),
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
          path: "branches",
          name: "admin-branches",
          component: () => import("@/view/admin/AllBranches.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "new-branches/:id?",
          name: "admin-allusers",
          component: () => import("@/view/admin/NewBranches.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "all-users",
          name: "admin-allusers",
          component: () => import("@/view/admin/AllUsers.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "product",
          name: "admin-product",
          component: () => import("@/view/admin/Product.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "new-product/:id?",
          name: "admin-new-product",
          component: () => import("@/view/admin/NewProduct.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "new-users/:id?",
          name: "admin-newusers",
          component: () => import("@/view/admin/NewUsers.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "entry",
          name: "admin-entry",
          component: () => import("@/view/admin/Entry.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "report",
          name: "admin-report",
          component: () => import("@/view/admin/Report.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "report-detail/:id",
          name: "admin-report-detail",
          component: () => import("@/view/admin/ReportDetail.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "user-details/:id?",
          name: "admin-user-details",
          component: () => import("@/view/admin/UserDetails.vue"),
          meta: { userType: 'admin' }
        },
      ]
    },
    //-----------for user login-------------------
    {
      name: "home",
      path: "/home",
      component: () => import("@/view/pages/auth/Home"),
    },
    {
      name: "rules",
      path: "/rules/:role",
      component: () => import("@/view/pages/auth/Rules"),
    },
    {
      path: "/login",
      component: () => import("@/view/pages/auth/login_pages/Login-1"),
      children: [
        {
          name: "userlogin",
          path: "/login",
          component: () => import("@/view/pages/auth/login_pages/Login-1"),
        },
      ]
    },
    {
      path: '/PasswordForgotForm/:token?/:email?/:userType?',
      name: "Password Forgot Form",
      component: () => import("@/view/PasswordForgotForm"),
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
