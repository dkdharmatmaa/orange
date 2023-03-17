import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
     //-----------users route-------------------
     {
      path: "/",
      redirect: "/check-eligibilty",
      component: () => import("@/view/layout/Layout"),
      children: [
        {
          path: "all-branches",
          name: "user-allbranches",
          component: () => import("@/view/pages/AllBranches.vue"),
          meta: { userType: 'user' }
        },
        {
          path: "all-users",
          name: "user-allusers",
          component: () => import("@/view/pages/AllUsers.vue"),
          meta: { userType: 'user' }
        },
        {
          path: "new-users/:id?",
          name: "user-newusers",
          component: () => import("@/view/pages/NewUsers.vue"),
          meta: { userType: 'user' }
        },
        {
          path: "all-matrix",
          name: "user-allmatrix",
          component: () => import("@/view/pages/AllMatrix.vue"),
          meta: { userType: 'user' }
        },
        {
          path: "/check-eligibilty",
          name: "user-checkeligibilty",
          component: () => import("@/view/pages/CheckEligibilty.vue"),
          meta: { userType: 'user' }
        },
        {
          path: "eligibilty-status",
          name: "user-eligibiltystatus",
          component: () => import("@/view/pages/EligibiltyStatus.vue"),
          meta: { userType: 'user' }
        },
        {
          path: "eligibilty-report",
          name: "user-eligibiltyreport",
          component: () => import("@/view/pages/EligibiltyReport.vue"),
          meta: { userType: 'user' }
        },
        {
          path: "user-details/:id?",
          name: "user-user-details",
          component: () => import("@/view/pages/UserDetails.vue"),
          meta: { userType: 'user' }
        },
        {
          path: "account",
          name: "user-account",
          component: () => import("@/view/pages/Account.vue"),
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
          path: "all-branches",
          name: "admin-allbranches",
          component: () => import("@/view/admin/AllBranches.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "new-branches/:id?",
          name: "admin-newbranches",
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
          path: "new-users/:id?",
          name: "admin-newusers",
          component: () => import("@/view/admin/NewUsers.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "all-matrix",
          name: "admin-allmatrix",
          component: () => import("@/view/admin/AllMatrix.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "new-matrix",
          name: "admin-newmatrix",
          component: () => import("@/view/admin/NewMatrix.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "edit-matrix/:branch_id/:minmum_range/:maximum_range",
          name: "admin-editmatrix",
          component: () => import("@/view/admin/EditMatrix.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "check-eligibilty",
          name: "admin-checkeligibilty",
          component: () => import("@/view/admin/CheckEligibilty.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "eligibilty-status",
          name: "admin-eligibiltystatus",
          component: () => import("@/view/admin/EligibiltyStatus.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "eligibilty-report",
          name: "admin-eligibiltyreport",
          component: () => import("@/view/admin/EligibiltyReport.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "user-details/:id?",
          name: "admin-user-details",
          component: () => import("@/view/admin/UserDetails.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "account",
          name: "admin-account",
          component: () => import("@/view/admin/Account.vue"),
          meta: { userType: 'admin' }
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
